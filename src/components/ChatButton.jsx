export default function ChatButton({name}) {
  return (
    <div 
      className="text-center hover:bg-neutral-700 rounded-[3px]"
    >
      <p className="text-neutral-100 text-small">{name}</p>
    </div>
  )
}

