import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function SpellCard({spell}) {
    return (
        <div class='card' id='spellCard'>
            <div class='card-body'>
                <h5 class='card-title'>{spell.name}</h5>
                 <h6 class="card-subtitle">{spell.school.name}</h6>
                <p ckass='card-text'>Casting Time: {spell.casting_time}</p>
                <p ckass='card-text'>Duration: {spell.duration}</p>
                <p ckass='card-text'>Concentration: {spell.concentration.toString().charAt(0).toUpperCase() + spell.concentration.toString().slice(1)}</p>
                <p ckass='card-text'>Range: {spell.range}</p>
            </div>
        </div>
    );
}