
/////// Réutilisation d'un composant pour en créer un autre (ligne 11 / 15 / 42)


function Button({ type, children }) {
  const className = 'm-1 btn btn-' + type;
  return <button className={className}>{children}</button>
}

function PrimaryButton({ children }) {
  return <Button type="primary">{children}</Button>
}

function SecondaryButton({ children }) {
  return <Button type="secondary">{children}</Button>
}

function Collum2({ left, right }) {
  return <div className="row mt-4">
    <div className="col-md-6">
      {left}
    </div>
    <div className="col-md-6">
      {right}
    </div>
  </div>
}

function Lorem() {
  return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aperiam at dignissimos fuga libero, modi nesciunt perferendis
    porro quam voluptatibus? Accusantium aspernatur dolorum facilis
    fuga labore, placeat quasi recusandae similique soluta!
  </p>
}

function Home() {
  return <div className="container mt-4 text-center">
    <Button type="warning">Button classique</Button>
    <PrimaryButton>Button primary</PrimaryButton>
    <SecondaryButton>Secondary button</SecondaryButton>
    <Collum2 left={<Lorem/>} right={<Lorem/>}/>
  </div>
}

ReactDOM.render(<Home/>, document.querySelector('#app'));