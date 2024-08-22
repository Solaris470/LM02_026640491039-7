import Navigation from "./template/header";
import Footer from "./template/footer";
import { useState } from "react";
import { herbs } from "./data";

export default function MyHerbList() {
  const [index, setIndex] = useState(0);
  const [herbList, setHerbList] = useState(herbs);

  return (
    <>
      <Navigation />
      <main className="container mx-auto p-3 grid justify-center">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ชื่อยาสมุนไพร
              </th>
              <th scope="col" className="px-5 py-3">
                สรรพคุณ
              </th>
              <th scope="col" className="px-6 py-3">
                การนำไปใช้
              </th>
              <th scope="col" className="px-6 py-3">
                ประเภท
              </th>
              <th scope="col" className="px-6 py-3">
                ผู้ผลิต
              </th>
              <th scope="col" className="px-6 py-3">
                ติดต่อผู้ผลิต
              </th>
              <th scope="col" className="px-6 py-3">
                ภาพตัวอย่าง
              </th>
            </tr>
          </thead>
          {herbList.map((item) => (
            <tbody key={item.id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                ><a href={`/herbs/MyHerbDetail/${item.id}`}>{item.hname}</a>
                </th>
                <td className="px-5x py-4">{item.des}</td>
                <td className="px-6 py-4">{item.usable}</td>
                <td className="px-6 py-4">{item.type}</td>
                <td className="px-6 py-4">{item.owner}</td>
                <td className="px-6 py-4">{item.contact}</td>
                <td className="px-6 py-4"><img src={item.img} alt="" /></td>
              </tr>
            </tbody>
          ))}
        </table>
      </main>
      <Footer />
    </>
  );
}
