import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
export default function ImagesList({ images, shuffle }){
  return(
  	<ul className = "ImagesList">
  	{
	  images.map((image, i)=>(
	  	<li key = {i}>
			<img src = {image.thumb} alt = "alt text" onClick = {shuffle.bind(null, i)} />
	  	</li>
	  ))
	}
  	</ul>
  )
}