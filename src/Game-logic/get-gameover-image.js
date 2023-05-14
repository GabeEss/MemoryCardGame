import yugiLose from '../Public/images/yugi-loser.png';
import yugiWin from '../Public/images/yugi-winner.jpeg';
import kaibaLose from '../Public/images/kaiba-loser.jpeg';
import kaibaWin from '../Public/images/kaiba-winner.jpeg';
import joeyLose from '../Public/images/joey-loser.jpg';
import joeyWin from '../Public/images/joey-winner.jpeg';
import pegasusLose from '../Public/images/pegasus-loser.jpeg';
import pegasusWin from '../Public/images/pegasus-winner.png';

export default function getImage(options, selectedOption, outcome) {
        const yugi = options[0];
        const kaiba = options[1];
        const joey = options[2];
        const pegasus = options[3];
        
        let image = "";

        if(outcome === "Loser" && selectedOption === yugi.value) {
            image = yugiLose;
        } else if(outcome === "Winner" && selectedOption === yugi.value) {
            image = yugiWin;
        } else if(outcome === "Loser" && selectedOption === kaiba.value) {
            image = kaibaLose;
        } else if(outcome === "Winner" && selectedOption === kaiba.value) {
            image = kaibaWin;
        } else if(outcome === "Loser" && selectedOption === joey.value) {
            image = joeyLose;
        } else if(outcome === "Winner" && selectedOption === joey.value) {
            image = joeyWin;
        } else if(outcome === "Loser" && selectedOption === pegasus.value) {
            image = pegasusLose;
        } else {
            image = pegasusWin;
        }

        return image;
}