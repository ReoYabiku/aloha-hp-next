export type LargeBlockProps = {
  url: string,
  icon: string,
  name: string,
}

export default function LargeBlock({ url, icon, name }: LargeBlockProps) {
  return (
    // TODO: point sursor
    <div style={{width: "300px", height: "300px", backgroundColor: "black"}}></div>
  );
}