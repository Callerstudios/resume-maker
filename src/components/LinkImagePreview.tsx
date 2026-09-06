import { useEffect, useState } from "react";

export default function LinkImagePreview({
  url,
  onImageExtracted,
}: {
  url: string;
  onImageExtracted: (url: string) => void;
}) {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    let cancelled = false;

    const fetchPreview = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`);
        const data = await res.json();
        const previewImage = data?.data?.image?.url ?? null;
        if (cancelled) return;
        setImage(previewImage);
        if (previewImage) onImageExtracted(previewImage);
      } catch (err) {
        if (!cancelled) setImage(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchPreview();

    return () => {
      cancelled = true;
    };
  }, [url]);

  if (!url) return null;

  return (
    <div>
      {image ? (
        <img
          src={image}
          alt="Link preview"
          style={{ width: "100%", maxHeight: 140, objectFit: "cover", borderRadius: 6 }}
        />
      ) : loading ? (
        <p style={{ fontSize: "0.78rem", color: "#6b7280", margin: 0 }}>Fetching preview…</p>
      ) : null}
    </div>
  );
}
