export default function Logo({
  width,
  height,
  backgroundColor = "ffffff",
  text = "LOGO"
}) {
  const logoUrl = `https://via.placeholder.com/${width}x${height}/${backgroundColor}?text=${text}`;

  return <img alt="logo" src={logoUrl} {...{ width, height }} />;
}
