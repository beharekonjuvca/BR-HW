import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Product } from "./components/shared/Product";
import thumbnail from "./assets/images/image-10.jpg";
function App() {
  return (
    <div className="App">
      <Product
        title="Morbi habitasse felis nulla arcu, morbi ultricies."
        thumbnail={thumbnail}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit euismod
        molestie proin sed in commodo purus sit sed sagittis etiam amet
        at tortor, enim commodo, arcu pretium lorem eu. Tellus diam
        egestas diam amet fermentum arcu, sed."
        price="12.00"
      />
    </div>
  );
}

export default App;
