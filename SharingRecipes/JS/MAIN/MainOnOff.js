const clockGetId1 = document.getElementById('clock');
const clockGetId2 = document.getElementById('clock_item');
const clockGetId3 = document.getElementById('clock_random');
const clockWeather1 = document.getElementById('js-weather');

function MainOnOffHanlder(self){
            
    if  (self.value === 'Weather')        
        {self.value = 'Main';        
         clockGetId1.style.display='none',
         clockGetId2.style.display='none',     
         clockGetId3.style.display='none',
         clockWeather1.style.display='flex'
    }
    else{self.value = 'Weather';
         clockGetId1.style.display='flex',
         clockGetId2.style.display='flex',  
         clockGetId3.style.display='block',
         clockWeather1.style.display='none'
    }
            
};