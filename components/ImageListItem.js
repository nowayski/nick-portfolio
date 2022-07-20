import Image from "next/image";

export default function ImageListItem(props) {
  return (
    <div className="w-1/2">
      <p className="p-3 text-lg font-bold">{props.title}</p>
      <Image
        src={props.source}
        width={80}
        height={80}
        alt={props.altText}
      ></Image>
    </div>
  );
}
