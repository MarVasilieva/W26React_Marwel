
import './App.css';
import Hero from './components/Hero';

const heroes = [
  {name : "Пипец",universe: "Marvel Comics",alterego:"Дейв Лизески" ,occupation: "парень с костюмом",superpowers:"обычный человек с костюмом и  с самомнением супергероя)", url:"https://upload.wikimedia.org/wikipedia/ru/3/39/Kick-ass-comic-2.jpg" },
  {name :"Убивашка",universe: "Marvel Comics",alterego: "Минди Маккриди" ,occupation:"девочка - убийца",superpowers:"умееет проффесионально обращаться с холодным оружием",  url:"https://i.pinimg.com/originals/89/26/d8/8926d8b5628272e490f9df8029208053.jpg"},
  {name :"Бетмен",universe: "DC Comics",alterego: "Брюс Уэйн" ,occupation: "борец с преступностью, филантроп",superpowers:" знания боевых искусств", url:"https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"},
  {name :"Супермен", universe: "DC Comics",alterego: "Кларк Кент" ,occupation: "борец с преступностью",superpowers:"полёт, самоисцеление, суперзрение и суперслух", url:"https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"},
  {name :"Железный человек", universe: "DC Comics",alterego: "Тони Старк" ,occupation: "борец с преступностью, филантроп, миллиардер",superpowers:" знания боевых искусств", url:"https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"},
  {name :"Спайдер-мен/Человек-паук", universe: "DC Comics",alterego: "Питер Паркер" ,occupation: "борец с преступностью, филантроп, миллиардер",superpowers:" знания боевых искусств", url:"https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg"},
  {name :"Халк", universe: "DC Comics",alterego: "Брюс Беннер" ,occupation: "борец с преступностью, филантроп, миллиардер",superpowers:" знания боевых искусств", url:"https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg"},
  {name :"Черная вдова", universe: "DC Comics",alterego: "Наташа Романофф" ,occupation: "борец с преступностью, филантроп, миллиардер",superpowers:"знания боевых искусств", url:"https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg"}
  ];
function App() {
  return (
    <div className='App'>
   {
    heroes.map((hero)=>
    <Hero name={hero.name} universe={hero.universe}  alterego={hero.alterego} occupation={hero.occupation} superpowers={hero.superpowers} url={hero.url} > </Hero>
    )
   }
    </div>
  );
}

export default App;
