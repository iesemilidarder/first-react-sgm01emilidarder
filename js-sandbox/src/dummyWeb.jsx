import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DummyHeader from './component/DummyHeader';
import DummyArticle from './component/DummyArticle';
import DummySidebar from './component/DummySidebar';

const myMenu = [{label: 'Home', link: '#', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eligendi eos expedita ipsam nemo quis repudiandae! Aperiam at id libero minima omnis quod recusandae reiciendis? Accusantium ad animi beatae excepturi iusto. Accusantium ad aliquid amet deserunt eaque, exercitationem fugiat, libero maxime odio porro quo repellendus reprehenderit unde. Ad, adipisci at beatae dolor doloremque eaque excepturi explicabo id in iusto labore magnam maiores necessitatibus obcaecati optio quibusdam ratione sed tempora tempore temporibus? Cupiditate eveniet illum quis. Ad adipisci aliquam consequatur cupiditate delectus deserunt eaque enim ipsa ipsam iste itaque labore laboriosam minus nemo perspiciatis quidem quo quod repellendus, sint suscipit veniam vero voluptatibus! Accusamus accusantium architecto blanditiis debitis, dicta distinctio dolorem doloribus ducimus enim, eos ex explicabo id impedit incidunt iste iusto laudantium libero nemo nisi nostrum quae quia quo quos reiciendis rem repellat repudiandae temporibus veritatis vitae voluptas? Architecto deserunt incidunt ipsa quae voluptate. Adipisci assumenda deserunt dolore error minima modi natus omnis provident, quo voluptatum. Ad beatae dolores enim eveniet ipsam nemo nobis repudiandae suscipit, unde. Culpa cumque explicabo molestiae perspiciatis quas sint. Adipisci delectus deleniti deserunt eos excepturi fugiat in incidunt itaque laborum nihil non, pariatur perferendis placeat quidem quis repellat, reprehenderit vero. Cum nemo recusandae vitae.'},
    {label: 'Contact', link: '#', text: 'Lorem fistrum apetecan ese pedazo de pupita tiene musho peligro me cago en tus muelas benemeritaar tiene musho peligro. Me cago en tus muelas hasta luego Lucas mamaar a wan mamaar. Me cago en tus muelas llevame al sircoo ese que llega apetecan. Diodenoo a wan a peich ahorarr. Diodeno llevame al sircoo ese que llega condemor diodeno pupita diodeno pupita. Amatomaa ese pedazo de mamaar ahorarr. La caidita benemeritaar diodenoo de la pradera a wan la caidita papaar papaar. Pupita pecador torpedo jarl pecador pecador quietooor ahorarr. La caidita condemor fistro llevame al sircoo se calle ustée. Ese hombree ahorarr se calle ustée se calle ustée. Al ataquerl se calle ustée va usté muy cargadoo apetecan benemeritaar a gramenawer. Te voy a borrar el cerito torpedo la caidita al ataquerl va usté muy cargadoo al ataquerl. Está la cosa muy malar condemor sexuarl pupita diodenoo a gramenawer está la cosa muy malar llevame al sircoo se calle ustée sexuarl. Torpedo va usté muy cargadoo llevame al sircoo a wan benemeritaar no te digo trigo por no llamarte Rodrigor papaar papaar caballo blanco caballo negroorl torpedo ahorarr diodeno. Amatomaa te voy a borrar el cerito jarl no te digo trigo por no llamarte Rodrigor condemor jarl pupita ese hombree no te digo trigo por no llamarte Rodrigor está la cosa muy malar'},
    {label: 'Shop', link: '#', text: 'Lorem fistrum ese pedazo de benemeritaar tiene musho peligro quietooor. A wan a peich ese que llega caballo blanco caballo negroorl de la pradera. Caballo blanco caballo negroorl a peich se calle ustée apetecan ese hombree llevame al sircoo a peich se calle ustée condemor ese hombree de la pradera. A gramenawer pupita diodeno quietooor fistro. Va usté muy cargadoo a wan la caidita sexuarl. Me cago en tus muelas tiene musho peligro a gramenawer te voy a borrar el cerito. Mamaar jarl torpedo amatomaa benemeritaar pecador diodenoo no puedor te va a hasé pupitaa. Pupita torpedo al ataquerl sexuarl de la pradera diodeno. Quietooor mamaar se calle ustée a wan quietooor por la gloria de mi madre apetecan. No te digo trigo por no llamarte Rodrigor qué dise usteer a gramenawer tiene musho peligro pecador tiene musho peligro pupita. Al ataquerl a wan fistro no te digo trigo por no llamarte Rodrigor. Pupita sexuarl por la gloria de mi madre pecador jarl apetecan a wan. Condemor condemor a peich jarl pupita. Apetecan sexuarl pecador se calle ustée.'} ];

class DummyWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {currentLabel: 'Home'};
        this._changeLabel = this._changeLabel.bind(this)
    }


    _changeLabel(label) {
        if (label !== undefined) {
            this.setState({currentLabel: label});
        }
    }

    _getThis(n) {
        if (n !== undefined) {
            for (let i = 0; i < myMenu.length; i++) {
                if (myMenu[i].label === n) {
                    return myMenu[i];
                }
            }
        }
        return {title: 404, content: "Error"};
    }

    render() {
        const content = this._getThis(this.state.currentLabel);
        return (
            <div>
                <DummyHeader data={myMenu} onclick={this._changeLabel}/>
                <div className="row">
                    <DummyArticle data={content}/>
                    <DummySidebar/>
                </div>
            </div>
            );
    }
}

ReactDOM.render(
        <DummyWeb/>
    , document.getElementById('app')
);