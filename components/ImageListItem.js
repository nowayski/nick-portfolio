import Image from "next/image";

export default function ImageListItem(props) {
  return (
    <div className="w-1/2">
      
      <Image
        src={props.source}
        width={80}
        height={80}
        alt={props.altText}
      ></Image>
      <p className="pb-4 text-lg font-bold">{props.title}</p>
    </div>
  );
}
