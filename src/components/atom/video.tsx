import { Video as Type } from "@/type/notion";

export default function Video({ value }: { value: Type }) {
  return (
    <div className="n2c_video">
      <div>
        <div>
          <div>
            <div>
              {value.video.type === "external" ? (
                <iframe
                  src={value.video.external?.url.replace("watch?v=", "embed/")}
                  title="YouTube video player"
                  allowFullScreen
                />
              ) : (
                <video src={value.video.file?.url} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
