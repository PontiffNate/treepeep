import React, {Component} from "react";
import "./Post.css"

export default class Post extends Component {
    render(){
        return(
            <div>
                <h1>Make a Post</h1>
                <label>
                    Picture:
                    <input type="file" />
                </label>
                <br />
                <label>
                    Title Of Post:
                    <input
                        name="title"
                        type="text"
                    />
                </label>
                <br />
                <label>
                    Discription Of Tree:
                    <textarea/>
                </label>
                <br />
                <label>
                    Species:
                    <select>
                        <option value="Arborvitae">Arborvitae</option>
                        <option value="Black Ash">Black Ash</option>
                        <option value="White Ash">White Ash</option>
                        <option value="Bigtooth Aspen">Bigtooth Aspen</option>
                        <option value="Quaking Aspen">Quaking Aspen</option>
                        <option value="Basswood">Basswood</option>
                        <option value="American Beech">American Beech</option>
                        <option value="Black Birch">Black Birch</option>
                        <option value="Gray Birch">Gray Birch</option>
                        <option value="Paper Birch">Paper Birch</option>
                        <option value="Yellow Birch">Yellow Birch</option>
                        <option value="Butternut">Butternut</option>
                        <option value="Black Cherry">Black Cherry</option>
                        <option value="Pin Cherry">Pin Cherry</option>
                        <option value="American Chestnut">American Chestnut</option>
                        <option value="Eastern Cottonwood">Eastern Cottonwood</option>
                        <option value="Cucumber Tree">Cucumber Tree</option>
                        <option value="American Elm">American Elm</option>
                        <option value="Slippery Elm">Slippery Elm</option>
                        <option value="Balsam Fir">Balsam Fir</option>
                        <option value="Hawthorn">Hawthorn</option>
                        <option value="Eastern Hemlock">Eastern Hemlock</option>
                        <option value="Bitternut Hickory">Bitternut Hickory</option>
                        <option value="Pignut Hickory">Pignut Hickory</option>
                        <option value="Shagbark Hickory">Shagbark Hickory</option>
                        <option value="American Hophornbeam">American Hophornbeam</option>
                        <option value="American Larch">American Larch</option>
                        <option value="Black Locust">Black Locust</option>
                        <option value="Honey Locust">Honey Locust</option>
                        <option value="Red Maple">Red Maple</option>
                        <option value="Silver Maple">Silver Maple</option>
                        <option value="Sugar Maple">Sugar Maple</option>
                        <option value="Black Oak">Black Oak</option>
                        <option value="Chestnut Oak">Chestnut Oak</option>
                        <option value="Northern Red Oak">Northern Red Oak</option>
                        <option value="Scarlet Oak">Scarlet Oak</option>
                        <option value="White Oak">White Oak</option>
                        <option value="Eastern White Pine">Eastern White Pine</option>
                        <option value="Pitch Pine">Pitch Pine</option>
                        <option value="Eastern Redcedar">Eastern Redcedar</option>
                        <option value="Sassfras">Sassfras</option>
                        <option value="Shadbush">Shadbush</option>
                        <option value="Red Spruce">Red Spruce</option>
                        <option value="Sycamore">Sycamore</option>
                        <option value="Tulip Tree">Tulip Tree</option>
                        <option value="Black Walnut">Black Walnut</option>
                        <option value="Black Willow">Black Willow</option>
                    </select>
                </label>
                <br />
                <label>
                    Hieght of the Tree:
                    <input name="Hieght" type="number"/>
                    <select>
                        <option value="feet">Feet</option>
                        <option value="meters">Meters</option>
                    </select>
                </label>
                <br />
                <label>
                    GPS Loacation of Tree:
                    <input name="place" type="text"/>
                </label>
            </div>
        )
    }
}