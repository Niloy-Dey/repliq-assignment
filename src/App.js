import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {

  /*
  folder structure in my projects 
  
   app.js > cartFunctionality and DataDisplay component
  
   cartFunctionality > Footer > pay button 
  
  if click the pay button then hidden the data display section and open the paying section page (new page) in same destination
  
  */



  return (
    <div className="">
      {/* bg-[#EEF0F9]   text-[#5C6AC4]*/}
      <Dashboard></Dashboard>

    </div>
  );
}

export default App;
