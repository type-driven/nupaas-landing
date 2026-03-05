import "../../styles/screenshot-frame.css";

interface ScreenshotFrameProps {
  src?: string;
  alt?: string;
  className?: string;
  placeholder?: string;
}

export function ScreenshotFrame({
  src,
  alt = "Platform screenshot",
  className = "",
  placeholder = "Platform screenshot — drop your asset here",
}: ScreenshotFrameProps) {
  return (
    <div className={`screenshot-frame ${className}`.trim()}>
      {src ? (
        <img src={src} alt={alt} className="screenshot-img" />
      ) : (
        <div className="screenshot-placeholder">
          <div className="screenshot-placeholder-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </div>
          <span>{placeholder}</span>
        </div>
      )}
    </div>
  );
}
