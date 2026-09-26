import bird from '../assets/Images/bird.jpg';
import demon from '../assets/Images/demon city.jpg'
import lost from '../assets/Images/Lost land.jpg'
import fast from '../assets/Images/Fast x.jpg'
import devil from '../assets/Images/devil may cry.jpg'


export const products = [
    {id: 100, name: 'Demon City', category: 'Action', 
        rating: 5, year: '2025', duration: '90m', imgPath: demon,
        description: "Framed for his family's murder and left for dead, an ex-hitman will stop at nothing to exact revenge on the masked demons who have taken over his city"
    },

    {id: 200, name: 'In the Lost Land', category: 'Action',
         rating: 6.9, year: '2024', duration: '120m', imgPath: lost,
         description: "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where the sorceress and her guide, the drifter Boyce, must outwit and outfight man and demon."
    },

    {id: 300, name: 'Fast X', category: 'Action', 
        rating: 6.2, year: '2023', duration: '141m', imgPath: fast,
        description: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes."
    },

    {id: 400, name: 'Devil May Cry', category: 'Spy Thriller',
         rating: 7.1, year: '2025', duration: '110m', imgPath: devil,
         description: "When a mysterious villain threatens to open the gates of Hell, a devilishly handsome demon hunter could be the world's best hope for salvation."
        },

]