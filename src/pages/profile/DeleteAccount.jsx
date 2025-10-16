import { useState } from "react";

const DeleteAccount = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDeleteAccount = () => {
    if (isChecked) {
      alert("Account deleted successfully.");
    } else {
      alert("Please agree to the terms and conditions to delete your account.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      {/* <div className="min-h-screen bg-gray-100 flex flex-col"> */}
      {/* Header */}

      {/* Content */}
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Terms & Conditions to Delete Account
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Lorem ipsum dolor sit amet consectetur. Laoreet et dui ut eu
            viverra. Ut pulvinar blandit faucibus donec aliquam lacinia.
            Lobortis purus sodales vel a lectus a sed. Sem neque diam purus
            senectus. Cursus est ultrices tincidunt faucibus at non.
          </li>
          <li>
            Ultrices felis erat purus tristique vulputate suspendisse massa
            malesuada nisl. Nisl tortor nam viverra pellentesque. Tristique odio
            eget elementum porttitor aliquam neque vel in rhoncus. Dolor risus
            natoque lectus sit dolor lectus nunc at. Amet sem feugiat vestibulum
            massa. Diam quis mollis augue duis pretium gravida ultrices. In ut
            suspendisse volutpat massa magna. Tincidunt adipiscing pretium
            suspendisse mattis maecenas vitae ac purus. Adipiscing quisque
            tortor nunc pellentesque nec. Praesent elementum et dictum amet
            lorem pulvinar facilisis interdum. Ultrices scelerisque tellus in
            quis gravida amet aliquam sed diam. Elit sed volutpat vitae rhoncus.
            Mauris porttitor orci bibendum nunc vulputate sodales. Tellus tellus
          </li>
          <li>
            suspendisse sit ultricies adipiscing vulputate egestas quis ut.
            Nullam est lorem scelerisque eget vitae nibh pharetra mollis.
            Fermentum eleifend sapien pellentesque cursus convallis consequat
            dui ultrices et. Vel non pellentesque consectetur gravida at non
            aliquet. Morbi neque convallis in curabitur mattis viverra arcu vel.
            Nunc fermentum imperdiet diam quis sagittis ut platea enim cursus.
            Convallis in a mauris adipiscing quam. Ornare volutpat facilisis
            faucibus vitae porttitor vel turpis pulvinar et. Habitant maecenas
            purus blandit amet ornare eu egestas elementum volutpat. Quis vitae
            nibh nunc congue faucibus sagittis nisi lobortis. Aliquet tempor
            cras enim nisi. Rutrum porttitor vulputate nec elit. Risus volutpat
            elementum consectetur vestibulum faucibus aliquam gravida fermentum.
            Id ac arcu laoreet sit. Malesuada eu tellus nec elit accumsan velit
            id ipsum. At consequat sed sagittis viverra cursus ipsum ultrices a
            et. Malesuada mattis ultrices ipsum duis posuere. Ante eget vitae
            aliquam leo. Tristique non dignissim pellentesque velit odio auctor.
            Id velit eget dictum ultrices quisque. Tellus vitae cursus
            pellentesque urna pretium. Amet diam nec ligula congue tortor amet
            venenatis. Et sed sed eu venenatis cras malesuada. Et donec integer
            ultrices quis nisl. Risus porttitor at consectetur in non tempor
            lorem enim. Dictum nisl a non amet dignissim vitae. Elementum
            tincidunt turpis eget risus amet bibendum tristique adipiscing
            cursus. Dignissim risus in enim fringilla nullam bibendum
            phasellus..
          </li>
          <li>
            Tortor eu id nibh enim pellentesque suspendisse. Tortor tempus sed
            in aliquam semper morbi ultrices molestie. Nulla turpis ac sed
            viverra tortor placerat. Eget justo tellus dolor aliquam. Nisi
            imperdiet nec facilisis a mattis. Est sed elementum pulvinar turpis
            ornare sit nec consectetur. Nisl eget commodo eget proin at leo
            suspendisse. A facilisi lectus eu enim egestas vitae netus blandit
            tincidunt. Lorem libero sagittis purus quis sed pellentesque
            faucibus. Tellus sit tellus nisl felis laoreet neque amet.
          </li>
          <li>
            Ut justo integer amet placerat sed sodales dapibus enim eget. Nullam
            nisl diam neque quis gravida dignissim morbi nascetur. Amet etiam
            orci risus ac diam. Augue sed nunc sollicitudin nisi quis enim
            elementum. Luctus scelerisque nisl at scelerisque cras donec. Sed
            mauris magna sed sit. Laoreet in aliquam cras facilisis senectus.
            Tempus sed fusce lectus viverra diam mauris aliquet. Lacinia diam
            tempor pharetra sociis lorem in lobortis. Tempor massa sit
            ullamcorper sollicitudin leo non sed. Non rhoncus imperdiet aliquet
            quam pharetra. Volutpat lorem purus facilisis varius adipiscing
            proin hac phasellus praesent. Curabitur augue volutpat feugiat nunc
            nibh nec semper. Proin consectetur non integer sociis suscipit.
            Nulla nisl risus consectetur tellus malesuada nunc.
          </li>
        </ul>
        <div className="w-full bg-[#70FFDD] rounded-xl p-4 mb-4">
          <h2 className="text-2xl my-4 font-medium">Deleting account is a permanent action</h2>
          <p className="max-w-6xl tracking-wide">Please be advised that the deletion of your account is a permanent action.  Once your account is deleted, you will lose Flipkart
             and Shopsy data  including order history & it will no longer be accessible and cannot be restored under any circumstances.</p>
        </div>

          <div className="flex justify-start">

          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="mr-2 mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <label htmlFor="agree" className="text-gray-700">
            Agree to continue delete this account.
          </label>
          </div>
        <div className="flex flex-col items-center mb-4 mx-auto">
        <button
          onClick={handleDeleteAccount}
          disabled={!isChecked}
          className={`w-fit py-2 px-6 text-white rounded ${
            isChecked
              ? "bg-red-600 hover:bg-red-700"
              : "bg-red-500 cursor-not-allowed"
          }`}
        >
          Delete Account
        </button>
        </div>
      </main>
      
    </div>
  );
};

export default DeleteAccount;
