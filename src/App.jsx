import AccordionData from './utils/content.jsx'
import Accordion from './components/Accordion'

const App = () => {
  return (
    // <Counter />
    // <Todo />
    // <Meals />
    // <Calculator />
    // <ToggleBackGroundColor />
    // <HiddenSearchBar />
    // <Testamonails />
    <div>
      <div className="accordion">
        {AccordionData.map(({ title, content }) => (
          <Accordion title={title} content={content}/>
        ))}
      </div>
    </div>
  )
}

export default App