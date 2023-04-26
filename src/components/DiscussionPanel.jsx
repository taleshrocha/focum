export default function DiscussionPanel({children}) {
  return (
  <div className="flex flex-col justify-center items-center 
        rounded-[4px] border text-neutral-100 w-full p-4
      "
    >
      {children}
  </div>
  )
}

