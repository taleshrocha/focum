export default function TitlePanel({title, description}) {
  return (
  <div className="flex flex-col justify-center items-center 
        rounded-[4px] border text-neutral-100 w-full p-4
      "
    >
    <h1 className="font-semibold text-2xl">{title}</h1>
    <h2 className="text-start w-full">{description}</h2>
  </div>
  )
}

