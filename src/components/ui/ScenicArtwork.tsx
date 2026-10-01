const crops = {
  coast: [0, 0, 1536, 755, 1536, 1024],
  harbour: [0, 485, 1254, 605, 1254, 1254],
  louisbourg: [0, 265, 1254, 800, 1254, 1254],
  lighthouse: [0, 490, 1254, 585, 1254, 1254],
  autumn: [0, 460, 1254, 635, 1254, 1254],
};
export default function ScenicArtwork({name = "coast", label = "Scenic destination illustration", className = ""}: {name?: keyof typeof crops; label?: string; className?: string}) {
  const [x,y,width,height,imageWidth,imageHeight]=crops[name];
  return <svg className={"scenic-artwork "+className} viewBox={[x,y,width,height].join(" ")} preserveAspectRatio="xMidYMid slice" role="img" aria-label={label}><image href={"/images/"+name+".webp"} width={imageWidth} height={imageHeight}/></svg>;
}
