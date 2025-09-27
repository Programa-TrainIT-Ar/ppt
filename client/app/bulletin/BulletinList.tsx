import {type Bulletin, Category, Scheme} from "~/bulletin/type";
import BulletinCard from "~/bulletin/BulletinCard";
import {Dropdown} from 'primereact/dropdown';
import {useState} from "react";

const BulletinList = () => {

    const bulletins: Bulletin[] = [{
        scheme: Scheme.DINNERS,
        content: "Content 1",
        title: "Title 1",
        categories: [Category.CATEGORY_1],
        published: new Date()
    }, {
        scheme: Scheme.VISA,
        content: "Content 2",
        title: "Title 2",
        categories: [Category.CATEGORY_2],
        published: new Date()
    }, {
        scheme: Scheme.MASTERCARD,
        content: "Content 3",
        title: "Title 3",
        categories: [Category.CATEGORY_3],
        published: new Date()

    }, {
        scheme: Scheme.MASTERCARD,
        content: "Content 3",
        title: "Title 3",
        categories: [Category.CATEGORY_1],
        published: new Date()
    }
    ]


    const [selectedCategory, setSelectedCategory] = useState<Category>()

    return <div style={{display: "flex", justifyContent: "space-between", gap: 5, flexWrap: "wrap"}}>

        <div className="filters"
             >
            Category:
            <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)}
                      options={Object.values(Category)}
                      optionLabel="name"
                      placeholder="Select a Category" className="w-full md:w-14rem"></Dropdown>
        </div>

        {bulletins.filter(bulletin => {
            return selectedCategory ? bulletin.categories.includes(selectedCategory) : true
        }).map((bulletin) => {
                return <BulletinCard bulletin={bulletin}/>
            }
        )}
    </div>
}

export default BulletinList