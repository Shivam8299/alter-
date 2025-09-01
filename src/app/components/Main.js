

import Image from "next/image"

function Main() {
  return (
    <div className="relative w-full h-[500px]"> 
      <Image 
        src="https://images.unsplash.com/photo-1738081359113-a7a33c509cf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" 
        fill
        className="object-cover" 
        alt="Unsplash photo"
      />
    </div>
  )
}

export default Main
