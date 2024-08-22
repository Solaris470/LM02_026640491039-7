import Navigation from "./template/header";
import Footer from "./template/footer";

export default function MyHerbForm() {
  return (
    <>
      <Navigation />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bol">เพิ่มข้อมูลยาสมุนไพร</h1>
        <hr className="my-3" />
      </div>
      <form className="max-w-xl mx-auto" action="/herbs/MyHerbDetail" method="GET">
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ชื่อสมุนไพร
            </label>
            <input
              type="text"
              name="HerbName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ชื่อผู้ผลิต
            </label>
            <input
              type="text"
              name="HerbOwner"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="countries_disabled"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ประเภทสมุนไพร
          </label>
          <select
            id="HerbType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>เลือกประเภทสมุนไพร</option>
            <option value="รักษา">รักษา</option>
            <option value="บำรุงร่างกาย">บำรุงร่างกาย</option>
            <option value="บำรุงสมอง">บำรุงสมอง</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="radio"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ยานี้ใช้สำหรับ
          </label>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              value="ภายนอก"
              name="HerdUse"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              ภายนอก
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value="ภายใน"
              name="HerdUse"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              ภายใน
            </label>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            สรรพคุณ
          </label>
          <textarea
            name="HerbDescription"
            rows={3}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ข้อมูลติดต่อ
          </label>
          <textarea
            name="HerbContact"
            rows={3}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="mb-5">
        <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              รูปภาพประกอบ (Link)
            </label>
            <input
              type="text"
              name="HerbImg"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 me-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
        บันทึก
        </button>
        <button
          type="reset"
          className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
        เคลียร์
        </button>
      </form>

      <Footer />
    </>
  );
}
