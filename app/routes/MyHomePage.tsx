export default function MyHomePage() {
  return (
    <>
    <div className="max-w-6xl mx-auto">
      <a
        href="/"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          My Profile
        </h5>
        <img
          src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
          alt="" 
        />
        <hr className="my-3"/>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          ชื่อ : นายอธิศ สนธิรักษ์
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          รหัสนักศึกษา : 026640491039-7
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          อีเมล์ : atit.son@rmutto.ac.th
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          เบอร์โทร : 0958852764
        </p>
      </a>
      </div>
    </>
  );
}
