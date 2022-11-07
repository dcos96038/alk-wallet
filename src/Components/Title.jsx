export function Title({type, text}) {
  return (
    <>
      {type === "h1" ? (
        <h1 className="text-[32px] font-bold font-serif">{text}</h1>
      ) : type === "h2" ? (
        <h2 className="text-[24px] font-bold font-serif">{text}</h2>
      ) : type === "h3" ? (
        <h3 className="text-[18.72px] font-bold font-serif">{text}</h3>
      ) : type === "h4" ? (
        <h4 className="text-[16px] font-bold font-serif">{text}</h4>
      ) : type === "h5" ? (
        <h5 className="text-[13.28px] font-bold font-serif">{text}</h5>
      ) : type === "h6" ? (
        <h6 className="text-[10.72px] font-bold font-serif">{text}</h6>
      ) : null}
    </>
  );
}
