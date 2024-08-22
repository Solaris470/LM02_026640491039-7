import Navigation from "./template/header";
import Footer from "./template/footer";
import { useState } from "react";
import { herbs } from "./data";
import { useParams } from "@remix-run/react";

export default function MyHerbList() {
    const myParam = useParams();

  const [index, setIndex] = useState(0);
  const [herbList, setHerbList] = useState(herbs);
  const herbId = Number(myParam.herbId);

  const items = herbList.filter((harbItems) => harbItems.id == herbId);

  return (
    <>
      <Navigation />
      <main className="container mx-auto p-3 grid justify-center">
      <div className="">
        <h1 className="text-3xl font-bold">ข้อมูลยาสมุนไพร</h1>
        <hr className="my-3" />
      </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          </thead>
          {items.map((item) => (
            <tbody key={item.id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                ><span className="font-bold">ชื่อยาสมุนไพร : </span>{item.hname}
                </th>
                
                <td className="px-6 py-4"><span className="font-bold text-gray-900">ภาพตัวอย่าง : </span> <img src={item.img} width="500" /></td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4"><span className="font-bold text-gray-900">รายละเอียด : </span>{item.des}</td>
                <td className="px-6 py-4"><span className="font-bold text-gray-900">สรรพคุณ : </span>{item.usable}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4"><span className="font-bold text-gray-900">การนำไปใช้ : </span>{item.usable}</td>
                <td className="px-6 py-4"><span className="font-bold text-gray-900">ผู้ผลิต : </span>{item.owner}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4"><span className="font-bold text-gray-900">ประเภทสมุนไพร : </span>{item.type}</td>
                <td className="px-6 py-4"><span className="font-bold text-gray-900">ติดต่อผู้ผลิต : </span>{item.contact}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <a href="/herbs/MyHerbList"><button type="button" className="my-3 focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">ย้อนกลับ</button></a>
        
      </main>
      <Footer />
    </>
  );
}
