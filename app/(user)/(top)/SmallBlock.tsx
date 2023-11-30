export type SmallBlockProps = {
  url: string,
  icon: string,
  name: string,
}

export default function SmallBlock({ url, icon, name }: SmallBlockProps) {
  return (
    // TODO: point cursor
    <div style={{width: "200px", height: "200px", backgroundColor: "black"}}></div>
  );
}