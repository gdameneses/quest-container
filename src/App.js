import './App.scss';
import QuestContainer from './components/questContainer/QuestContainer.js'

function App() {
  return (
    <main className='main'>
      <aside className='sidebar'></aside>
        <section className='content'>
          <div className='top-bar'></div>
          <div className='main__container'>
            <div className='main__wrapper main__wrapper--left'>
              <QuestContainer className='main__card quests-container' />
              <div className='main__card main__card--placeHolder'></div>
            </div>
            <div className='main__wrapper main__wrapper--right'>
              <div className='main__card main__card--placeHolder'></div>
              <div className='main__card main__card--placeHolder'></div>
              <div className='main__card main__card--placeHolder'></div>
            </div>
          </div>
        </section>
    </main>
  );
}

export default App;
