import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './common/Menu';
import Home from './Home';
import Counter from './component/Counter';
// import FunComp  from './component/FunComp';
import ToDoAssignment from './component/ToDoAssignment';
import ComponentModal from './component/ComponentModal';
import ComponentAPI from './component/ComponentAPI';
import FunToDoComponet from './component/FunToDoComponent';
import DigitalClock from './component/DigitalClocks';
import DigitalClockClass from './component/ComponentDigitalClockClass';
import FormFunctional from './component/FormFn';
import EMI from './component/EMICalculator/EMI';
import ExpenseTracker from './component/ExpenseTracker/ExpenseTracker';
import CurrencyConverter from './component/CurrencyConverter/CurrencyConverter';
import HOC1 from './component/hoc/HOC1';
import HOC2 from './component/hoc/HOC2';
import './sass/Test.scss'
import WeatherApp from './component/WeatherApp/WeatherApp';
import ContactApp from './component/CRUD_API_JSON_Server/ContactApp';
import NotFound from './common/NotFound';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Menu />
        <div className="container rightcontainer">
          <div className="row">
            {/* <div className="col-lg-1 bg-success">Left</div> */}
            <div className="col-sm-10 col-lg-10 main-wrapper">
              <Routes>
                {/*Default route*/}
                <Route path="/" element={<Home />} />
                {/*Default route*/}
                <Route path="/home" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/compmodal" element={<ComponentModal />} />
                <Route path="/todo" element={<ToDoAssignment />} />
                <Route path="/compapi" element={<ComponentAPI />} />
                <Route path="/funtodolist" element={<FunToDoComponet />} />
                <Route path="/digiclock" element={<DigitalClock />} />
                <Route path="/digiclockclass" element={<DigitalClockClass />} />
                <Route path="/formfn" element={<FormFunctional />} />
                <Route path="/emicalc" element={<EMI />} />
                <Route path="/expensetracker" element={<ExpenseTracker />} />
                <Route
                  path="/currencyconverter"
                  element={<CurrencyConverter />}
                />
                <Route path="/hoc1" element={<HOC1 />} />
                <Route path="/hoc2" element={<HOC2 />} />
                <Route path="/jsonserver" element={<ContactApp />} />
                {/* <Route path='/themeswitch' element={<ThemeSwitcher />} />
                <Route path="/contextdemo2" element={<ContextDemo />} /> */}
                <Route path="/apijsonserver" element={<WeatherApp />} />
                <Route path="/weatherapp" element={<WeatherApp />} />
                {/*Nested route*/}
                <Route path="/apps" element={<ContactApp />} />
                <Route path="apps">
                  <Route path="apps1" element={<CurrencyConverter />} />
                  {/* <Route path="apps2" element={<ContextDemo />} /> */}
                </Route>
                {/*Nested route*/}

                {/* 404/Page Not Found route*/}
                <Route path="*" element={<NotFound />} />
                {/*404/Page Not Found route*/}
              </Routes>
            </div>
            {/* <div className="col-lg-1 bg-success">Aside</div> */}
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
