import React, {Component} from 'react';
import PropTypes from "prop-types";

class DummyArticle extends Component {


    render() {
        let colClass = "col";
        if (this.props.numCols !== undefined) {
            colClass = "col-" + this.props.numCols;
        }
        return (
            <div className={colClass}>
                <h1>Lorem</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis dolore, nihil obcaecati omnis
                    temporibus ut veritatis voluptates? Ab illum iste maiores natus neque obcaecati perspiciatis quod
                    sunt ut voluptatibus? Ab, aliquid cupiditate distinctio dolores ducimus enim hic natus neque nostrum
                    odio perferendis quae quidem quos ratione repellat suscipit temporibus. Accusantium, cumque,
                    delectus deleniti distinctio excepturi fuga harum illum itaque laboriosam laudantium maiores nam
                    quisquam repellat, repudiandae sapiente sint soluta voluptate. Accusantium, aut corporis dignissimos
                    dolorum error facere, illum laboriosam minus odio quasi ratione tempora unde! A accusantium animi
                    aperiam, consectetur consequuntur culpa debitis dignissimos distinctio enim esse eveniet ex
                    exercitationem, expedita harum iste laborum laudantium molestiae numquam obcaecati pariatur
                    perspiciatis possimus, quasi quo quod recusandae suscipit tempore tenetur ut vel voluptatibus! Amet,
                    doloribus ex facilis laudantium quasi quia. Ad atque aut deleniti dolorum excepturi id nisi rem sit,
                    veniam! Accusamus consequatur deleniti dolorem ducimus eaque eligendi non, quam rerum velit. Aliquid
                    aspernatur ipsam iste laudantium minima natus necessitatibus numquam pariatur rerum voluptate.
                    Assumenda consectetur corporis culpa deleniti dolore dolorum ducimus eligendi, exercitationem iste
                    laborum nesciunt nisi omnis temporibus. Ad consectetur culpa esse facere inventore ipsam ipsum,
                    laudantium nam nihil non praesentium quidem quis, rem repellendus sed sunt veniam vitae?</p>
            </div>
        );
    };
}

DummyArticle.propTypes = {
    data: PropTypes.string,
    numCols: PropTypes.number
};

export default DummyArticle;

