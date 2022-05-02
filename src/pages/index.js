import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
const IndexPage = () => (
  <Layout>
    <Seo title="Домашние задание" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/icon-removebg-preview.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
<h1>
        Добро пожаловать на сайт с <b>Домашним заданием</b>
      </h1>
      <p className={styles.intro}>
        <b>У нас новый сайт!!!</b>
        <br />      </p>
         <p>         Чтобы узнать домашние задание:      </p>
      <p>1.Выберите неделю(текущую или следующую)      </p>
      <p>2.Выберите день недели(понедельник-пятница)      </p>
      <p>3.Нажмите кнопку "Посмотреть"      </p>     

<form>
  <select  name="week" id="sa1" class="homework_menu" class="Homework">
    
       
    <optgroup label="Текущая неделя">
        <option  value="25.04.2022 Апрель
         1.Математика(Геометрия)-будет кр, с.191 (в)
         2.Физкультура и здоровье-
         3.Англисский язык(у группы Жанны Яраславовны)-у.5 с.144 
         3.Информатика(у группы Людмилы Михайловны)-
         4.Русский язык-
         5.Англисский язык(у группы Людмилы Михайловны)-
         5.Информатика(у группы Жанны Яраславовны)-
         6.Химия-§49-50
         7.Биология-§57">Понедельник</option>
         <option  value="26.04.2022 Апрель
         1.Физика-§36 упражнение 24 задание 1
         2.Математика(Геометрия)-
         3.Искусство-
         4.География-
         5.Беларуская мова-Пр. 353
         6.Беларуская литература-Фрыдрых Шылер (Кубок) (выр.чыт)">Вторник</option>
         <option value="27.04.2022 Апрель
         1.Биология-§58, §59
         2.Всемирная История-§28 с.179-180 (устно), с.178
         3.Математика(Алгебра)-6(3), 7(б), №8(б)
         4.Физкультура и здоровье-
         5.Труды-
         6.Англисский язык(Жанна Яраславовна)-у.1 с.145
         6.Англисский язык(Людмила Михайловна)-">Среда</option>
         <option value="28.04.2022 Апрель
         1.Беларуская мова-Пр. 357
         2.Руский язык-подготовиться к диктанту по толковому словарю 
         3.Русская литература-Стихотворения Заболоцкого Дождь, Детство, Журавли 
         4.Математика(Алгебра)-
         5.История Беларуси-§29 задание 4, 5, 6
         6.Химия-">Четверг</option>
         <option value="29.04.2022 Апрель
         1.Физкультура и здоровье-
         2.Физика-§37 упражнение 25 задание 1
         3.Математика(Алгебра)-№4.31, №4.33(а), №4.29
         4.География-§50
         5.Англисский язык(Жанна Яраславовна)-словарный диктант Unit 8
         5.Англисский язык(Людмила Михайловна)-
         6.Русская литература-прочитать 1,2 главу Голубое и зелёные">Пятница</option>
       </optgroup>
          <optgroup label="Следующая неделя">
            <option  value="02.05.2022 Май
             1.Математика(Алгебра)-№4.35, №4.36, №4.37
             2.Физкультура и здоровье-
             3.Англисский язык(у группы Жанны Яраславовны)-Выписать слова Unit 9
             3.Информатика(у группы Людмилы Михайловны)-
             4.Русский язык-
             5.Англисский язык(у группы Людмилы Михайловны)-
             5.Информатика(у группы Жанны Яраславовны)-
             6.Химия-
             7.Биология-§60">Понедельник</option>
             <option  value="03.05.2022 Май
             1.Физика-§38 упражнение 25 задание 2
             2.Математика(Геометрия)-
             3.Искусство-
             4.География-§51
             5.Беларуская мова-Пр. 360
             6.Беларуская литература-выучить на память Ганарысты Парсюк">Вторник</option>
             <option value="04.05.2022 Май
             1.Биология-
             2.Всемирная История-
             3.Математика(Алгебра)-
             4.Физкультура и здоровье-
             5.Труды-
             6.Англисский язык(Жанна Яраславовна)-
             6.Англисский язык(Людмила Михайловна)-">Среда</option>
             <option value="05.05.2022 Май
             1.Беларуская мова-Пр. 360
             2.Руский язык-
             3.Русская литература-
             4.Математика(Геометрия)-№1-3 (в) с.191
             5.История Беларуси-
             6.Химия-">Четверг</option>
             <option value="06.05.2022 Май
             1.Физкультура и здоровье-
             2.Физика-§38 упражнение 25 задание 2
             3.Математика(Алгебра)-
             4.География-
             5.Англисский язык(Жанна Яраславовна)-
             5.Англисский язык(Людмила Михайловна)-
             6.Русская литература-">Пятница</option>
           </optgroup>
      </select> 
	</form>
<input  type="button" onclick="f1()" value="Посмотреть" class="homework_button"> 

<style>
.alert {
    padding: 20px;
    background-color: #f44336;
    color: white;
}
.closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}
.closebtn:hover {
    color: black;
}
</style>
<style>
.homework_button{
    height:50px;
    width:400px;
    background-color: #FFFFFF;
   border: 1px solid #CCCCCC;
   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
   transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
       border-radius: 4px;
   color: #555555;
   display:block;
       width:400px;
       margin: 20px auto;
   font-size: 14px;
       text-align:center;
   height: 50px;
   line-height: 20px;
   margin-bottom: 10px;
   padding: 4px 6px;
   vertical-align: middle;
       text-decoration:none;
}
.homework_button:hover, .homework_button:focus {
   border-color: rgba(82, 168, 236, 0.8);
   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6);
   outline: 0 none;
}
.homework_menu{
    height:50px;
    width:400px;
}
</style>
<style>
.Homework{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.homework_menu{
    height:50px;
    width:400px;
}
</style>
  </Layout>
)
export default IndexPage
