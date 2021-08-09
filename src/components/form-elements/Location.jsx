import React, { useContext } from "react";
import { DataContext } from "../services/DataService";
import { Card, Input, Select } from "antd";

export const Location = () => {
  const { gramaPanchayath, setGramaPanchayath } = useContext(DataContext);
  const { Option, OptGroup } = Select;

  return (
    <Card>
      <div className="label">Place of Residence: State</div>

      <Select defaultValue="Kerala">
        <OptGroup label="State">
          <Option value="Andhra Pradesh">Andhra Pradesh</Option>
          <Option value="Arunachal Pradesh">Arunachal Pradesh</Option>
          <Option value="Assam">Assam</Option>
          <Option value="Bihar">Bihar</Option>
          <Option value="Chhattisgarh">Chhattisgarh</Option>
          <Option value="Goa">Goa</Option>
          <Option value="Gujarat">Gujarat</Option>
          <Option value="Haryana">Haryana</Option>
          <Option value="Himachal Pradesh">Himachal Pradesh</Option>
          <Option value="Jharkhand">Jharkhand</Option>
          <Option value="Karnataka">Karnataka</Option>
          <Option value="Kerala">Kerala</Option>
          <Option value="Madhya Pradesh">Madhya Pradesh</Option>
          <Option value="Maharashtra">Maharashtra</Option>
          <Option value="Manipur">Manipur</Option>
          <Option value="Meghalaya">Meghalaya</Option>
          <Option value="Mizoram">Mizoram</Option>
          <Option value="Nagaland">Nagaland</Option>
          <Option value="Odisha">Odisha</Option>
          <Option value="Punjab">Punjab</Option>
          <Option value="Rajasthan">Rajasthan</Option>
          <Option value="Sikkim">Sikkim</Option>
          <Option value="Tamil Nadu">Tamil Nadu</Option>
          <Option value="Telangana">Telangana</Option>
          <Option value="Tripura">Tripura</Option>
          <Option value="Uttar Pradesh">Uttar Pradesh</Option>
          <Option value="Uttarakhand">Uttarakhand</Option>
          <Option value="West Bengal">West Bengal</Option>
        </OptGroup>
        <OptGroup label="Union Territories">
          <Option value="Andaman & Nicobar Islands">
            Andaman & Nicobar Islands
          </Option>
          <Option value="Chandigarh">Chandigarh</Option>
          <Option value="Dadra & Nagar Haveli and Daman & Diu">
            Dadra & Nagar Haveli and Daman & Diu
          </Option>
          <Option value="Delhi">Delhi</Option>
          <Option value="Jammu & Kashmir">Jammu & Kashmir</Option>
          <Option value="Ladakh">Ladakh</Option>
          <Option value="Lakhshadweep">Lakhshadweep</Option>
          <Option value="Puducherry">Puducherry</Option>
        </OptGroup>
      </Select>
      <div className="label">District</div>
      <Select defaultValue="Ernakulam">
        <OptGroup label="Kerala">
          <Option value="Alappuzha">Alappuzha</Option>
          <Option value="Ernakulam">Ernakulam</Option>
          <Option value="Idukki">Idukki</Option>
          <Option value="Kannur">Kannur</Option>
          <Option value="Kasaragod">Kasaragod</Option>
          <Option value="Kollam">Kollam</Option>
          <Option value="Kottayam">Kottayam</Option>
          <Option value="Kozhikode"> Kozhikode</Option>
          <Option value="Malappuram">Malappuram</Option>
          <Option value="Palakkad">Palakkad</Option>
          <Option value="Pathanamthitta">Pathanamthitta</Option>
          <Option value="Thiruvananthapuram">Thiruvananthapuram</Option>
          <Option value="Thrissur">Thrissur</Option>
          <Option value="Wayanad">Wayanad</Option>
        </OptGroup>
      </Select>
      <div className="label">Taluk</div>
      <Select defaultValue="Kochi">
        <OptGroup label="Thiruvananthapuram">
          <Option value="Neyyattinkara">Neyyattinkara</Option>
          <Option value="Kattakkada">Kattakkada</Option>
          <Option value="Nedumangadu">Nedumangadu</Option>
          <Option value="Thiruvananthapuram">Thiruvananthapuram</Option>
          <Option value="Chirayinkeezhu">Chirayinkeezhu</Option>
          <Option value="Varkala">Varkala</Option>
        </OptGroup>
        <OptGroup label="Kollam">
          <Option value="Kollam">Kollam</Option>
          <Option value="Kunnathoor">Kunnathoor</Option>
          <Option value="Karunagappally">Karunagappally</Option>
          <Option value="Kottarakkara">Kottarakkara</Option>
          <Option value="Punalur">Punalur</Option>
          <Option value="Pathanapuram">Pathanapuram</Option>
        </OptGroup>
        <OptGroup label="Pathanamthitta">
          <Option value="Adoor">Adoor</Option>
          <Option value="Konni">Konni</Option>
          <Option value="Kozhencherry">Kozhencherry</Option>
          <Option value="Ranni">Ranni</Option>
          <Option value="Mallappally">Mallappally</Option>
          <Option value="Thiruvalla">Thiruvalla</Option>
        </OptGroup>
        <OptGroup label="Alappuzha">
          <Option value="Chenganoor">Chenganoor</Option>
          <Option value="Mavelikkara">Mavelikkara</Option>
          <Option value="Karthikappally ">Karthikappally </Option>
          <Option value="Kuttanad ">Kuttanad </Option>
          <Option value="Ambalappuzha">Ambalappuzha</Option>
          <Option value="Cherthala"></Option>
        </OptGroup>
        <OptGroup label="Kottayam">
          <Option value="Changanasserry">Changanasserry</Option>
          <Option value="Kottayam">Kottayam</Option>
          <Option value="Vaikom">Vaikom</Option>
          <Option value="Meenachil">Meenachil</Option>
          <Option value="Kanjirappally">Kanjirappally</Option>
        </OptGroup>
        <OptGroup label="Idukki">
          <Option value="Peermade">Peermade</Option>
          <Option value="Udumbanchola">Udumbanchola</Option>
          <Option value="Idukki">Idukki</Option>
          <Option value="Thodupuzha">Thodupuzha</Option>
          <Option value="Devikulam">Devikulam</Option>
        </OptGroup>
        <OptGroup label="Ernakulam">
          <Option value="Kothamangalam">Kothamangalam</Option>
          <Option value="Muvattupuzha">Muvattupuzha</Option>
          <Option value="Kunnathunad ">Kunnathunad </Option>
          <Option value="Kanayannur ">Kanayannur</Option>
          <Option value="Kochi">Kochi</Option>
          <Option value="North Paravur">North Paravur</Option>
          <Option value="Aluva">Aluva</Option>
        </OptGroup>
        <OptGroup label="Thrissur">
          <Option value="Chalakudy">Chalakudy</Option>
          <Option value="Mukundapuram ">Mukundapuram </Option>
          <Option value="Kodungallur">Kodungallur</Option>
          <Option value="Thrissur">Thrissur</Option>
          <Option value="Chavakkad">Chavakkad</Option>
          <Option value="Kunnamkulam">Kunnamkulam</Option>
          <Option value="Thalapilly">Thalapilly</Option>
        </OptGroup>
        <OptGroup label="Palakkad">
          <Option value="Alathoor">Alathoor</Option>
          <Option value="Chittur">Chittur</Option>
          <Option value="Palakkad">Palakkad</Option>
          <Option value="Pattambi">Pattambi</Option>
          <Option value="Ottappalam">Ottappalam</Option>
          <Option value="Mannarkkad">Mannarkkad</Option>
          <Option value="Attappady">Attappady</Option>
        </OptGroup>
        <OptGroup label="Malappuram">
          <Option value="Perinthalmanna">Perinthalmanna</Option>
          <Option value="Nilambur">Nilambur</Option>
          <Option value="Eranad">Eranad</Option>
          <Option value="Kondotty">Kondotty</Option>
          <Option value="Ponnani">Ponnani</Option>
          <Option value="Tirur">Tirur</Option>
          <Option value="Tirurangadi">Tirurangadi</Option>
        </OptGroup>
        <OptGroup label="Kozhikode">
          <Option value="Kozhikode">Kozhikode</Option>
          <Option value="Thamarassery">Thamarassery</Option>
          <Option value="Koyilandy">Koyilandy</Option>
          <Option value="Vatakara">Vatakara</Option>
        </OptGroup>
        <OptGroup label="Wayanad">
          <Option value="Vythiri">Vythiri</Option>
          <Option value="Sulthan Bathery">Sulthan Bathery</Option>
          <Option value="Mananthavady">Mananthavady</Option>
        </OptGroup>
        <OptGroup label="Kannur">
          <Option value="Thalassery ">Thalassery </Option>
          <Option value="Iritty">Iritty</Option>
          <Option value="Kannur">Kannur</Option>
          <Option value="Thaliparamba">Thaliparamba</Option>
          <Option value="Payyannur ">Payyannur</Option>
        </OptGroup>
        <OptGroup label="Kasargod">
          <Option value="Hosdurg">Hosdurg</Option>
          <Option value="Vellarikundu">Vellarikundu</Option>
          <Option value="Kasaragod">Kasaragod</Option>
          <Option value="Manjeshwaram">Manjeshwaram</Option>
        </OptGroup>
      </Select>

      <div className="label">Grama Panchayath / Municipality / Corporation</div>
      <Input
        value={gramaPanchayath}
        onChange={setGramaPanchayath}
        type="text"
        placeholder="Eg: Kalamassery"
      />
    </Card>
  );
};
