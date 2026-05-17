export default function Footer() {
  return (
    <footer className="flex justify-center h-125 bg-black text-white">
      <div className="py-20 px-10 w-125 ">
        <h1 className="text-center text-4xl font-serif">NORDIC ROSE</h1>
        <p className="text-center w-90 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula.
        </p>
        <div>
          <ul className="flex justify-center gap-2 mt-10">
            <li className="underline m-2">Twitter</li>
            <li className="underline m-2">LinkedIn</li>
            <li className="underline m-2">RSS</li>
          </ul>
          <div className="text-center mt-10 w-100">
            © 2012–2020 Nordic Rose Co. All rights reserved.
          </div>
        </div>
      </div>    
    </footer>
  )
}




          