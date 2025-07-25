import { useEffect, useState } from "react";

export default function LinkImagePreview({ url }: { url: string }) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const fetchPreview = async () => {
      try {
        const res = await fetch(
          `https://api.microlink.io/?url=${encodeURIComponent(url)}`
        );
        const data = await res.json();
        const previewImage = data?.data?.image?.url;
        setImage(previewImage || null);
      } catch (err) {
        console.error("Preview error", err);
      }
    };

    fetchPreview();
  }, [url]);

  return (
    <div>
      {image ? (
        <img
          src={image}
          alt="Preview"
          style={{
            width: "100%",
            maxHeight: 200,
            objectFit: "cover",
            borderRadius: 8,
            marginTop: 8,
          }}
        />
      ) : (
        <p>Loading preview...</p>
      )}
    </div>
  );
}
