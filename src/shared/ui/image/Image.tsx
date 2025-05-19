import classes from "./image.module.css";

export function Image({
  aspectRatio,
  src,
}: {
  src?: string;
  aspectRatio?: string;
}) {
  return (
    <img src={src} alt="" style={{ aspectRatio }} className={classes.image} />
  );
}
