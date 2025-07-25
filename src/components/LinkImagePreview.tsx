import { useEffect, useState } from "react";

export default function LinkImagePreview({
  url,
  onImageExtracted,
}: {
  url: string;
  onImageExtracted: (url: string) => void;
}) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const fetchPreview = async () => {
      try {
        console.log("Fetching preview for URL:", url);
        
        const res = await fetch(
          `https://api.microlink.io/?url=${encodeURIComponent(url)}`
        );
        
        const data = await res.json();
        console.log(data);
        const previewImage = data?.data?.image?.url;
        setImage(previewImage || null);
        if (previewImage) {
          onImageExtracted(previewImage);
        }
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
          style={{ width: "100%", maxHeight: 200, objectFit: "cover" }}
        />
      ) : (
        url && <p>Loading preview...</p>
      )}
    </div>
  );
}
