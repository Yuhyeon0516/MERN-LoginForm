# This is a Diary Application built with the MERN Stack.

## What is the MERN stack?

MERN Stack is a combination of MongoDB, Express.js, React and Node.js, forming a full-stack JavaScript framework.

---
## Client

Client is organizing with React.

Npm dependencies used are as follows.

```
client@0.1.0 /Users/kim-yuhyeon/Desktop/Web/MERNstack-Diary/client
├── @ckeditor/ckeditor5-build-classic@38.1.1
├── @ckeditor/ckeditor5-react@6.1.0
├── @testing-library/jest-dom@5.16.5
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── axios@1.4.0
├── http-proxy-middleware@2.0.6
├── react-bootstrap@2.8.0
├── react-dom@18.2.0
├── react-router-dom@6.14.2
├── react-scripts@5.0.1
├── react@18.2.0
└── web-vitals@2.1.4
```

I used react-router-dom to organize three pages: Home, Detail and Write.

- Header and Footer

  All pages include Header and Footer.

  - Header

    Header is organizing with application name, signup button, signin button and signout button.

    When you are not logged in, you can see the application name, signup button, and signin button.<br/>
    ![image](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/d97001c7-7213-4c30-b694-6f90637aeb51)

    but when you are logged in, you can see the application name, signout button.<br/>
    ![image](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/8cb73b5f-84b0-4527-9952-1be9fc5c1ab4)

    When you click the apllication name, page move to Homepage.

    When you click the signup button, signup modal will appear in the center of the page.<br/>
    ![image](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/40206f81-8978-4490-9750-aaee9a9a1bef)


    When you click the signin button, signin modal will appear in the center of the page.<br/>
    ![image](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/7d187cd9-7e7f-4c7e-987d-b25c7f7e771e)


  - Footer

    Footer indicate year, application name and copyright.<br/>
    ![Footer](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/f9fcd8d9-74af-48d7-80d1-49f7c1fff0d4)


- Homepage

  Homepage is organizing with Header, Footer and Board.

  - Board

    Board is organizing with Write Button, My Post(All Post) and Table(Mentions)

    When you are not logged in, you can only see the mentions.
    ![Board1](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/4b0e5dbe-ba8d-4efc-91fa-3f32c839a5d8)


    When you are logged in, you can see the Board.<br/>
    ![Board2](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/369a2bcf-2b8c-48a9-b2c4-f09b4ce71aa9)


    You can choose whether you want to see only your post or all of post through My Post(All Post) button.<br/>
    ![Board3](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/46423570-d864-43a2-9077-b951a330b7e3)

    When you clicked post's date or title, page move to Detailpage.

    When you clicked write button, page move to Writepage.

- Detailpage

  Detailpage is organizing with Header, Footer, post title, post content, modify button and delete button.<br/>
  ![Detail1](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/d7157932-a179-4583-9176-e0138661cef0)


  If it is not my post, you can't see modify button and delete button.<br/>
  ![Detail2](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/ba9740ac-9344-4d58-b0c5-e83ceb031951)


  When you clicked modify button, page move with the existing title and content entered.<br/>
  ![Detail3](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/a19d1542-fd97-4d89-977f-0f1f0f3a411e)

  When you clicked delete button, this post delete and page move to Homepage.<br/>
  ![Detail4](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/35b8277d-7ffc-491f-830d-ad05fa59e891)

- Writepage

  Writepage is organize with Header, Footer, title textfield, content textfield and save button.<br/>
  ![Write1](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/381e3ead-3e9b-4117-95ee-1a7b6e09bdfe)

  When you clicked save button but title or content textfield is empty, alert is raised.<br/>
  ![Write2](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/d6030f6b-a8e8-4bc1-aac9-b1338082bd7d)
  ![Write3](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/8f1d8daa-d34d-43c5-9f10-52f41e79ee10)

  If title and content textfield are not empty, press save button to upload the post.<br/>
  ![Write4](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/ebc173d2-11f5-45f1-a6e0-f96b8c732ef7)

---
## Server

Server is organizing with MongoDB, Express.js and Node.js.

Npm dependencies used are as follows.

```
server@1.0.0 /Users/kim-yuhyeon/Desktop/Web/MERNstack-Diary/Server
├── bcryptjs@2.4.3
├── cors@2.8.5
├── dotenv@16.3.1
├── express@4.18.2
├── mongoose@7.3.4
└── nodemon@3.0.1
```

Server consist of a user and board.<br/>
User and board consists of a model, routes, and controllers.

- User

  - UserModel

    UserModel use user schema, which consists of a name, email and password.

    ```Javascript
    import mongoose, { Schema } from "mongoose";

    const userSchema = new Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    });

    const userModel = mongoose.model("User", userSchema);

    export default userModel;
    ```

  - UserRoutes and UserControllers

    UserRoutes consists of signin router and signup router.<br/>
    UserRoutes's actual behavior is defined in User Controllers.

    - Signup router and controller

      Signup router send a api post request to `/signup` and return the response.

      ```Javascript
      - Router
      import { Router } from "express";
      import {userSignUpController } from "../controllers/userContollers.js";

      const router = Router();

      router.post("/signup", (req, res) => {
        userSignUpController(req, res);
      });

      - Controller
      import User from "../models/userModel.js";
      import bcrypt from "bcryptjs";

      export const userSignUpController = async (req, res) => {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });

        if (user) {
          return res.status(400).json({ errors: [{ message: "This email is already subscribed." }] });
        }

        user = new User({ name, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        res.status(200).json({ successes: [{ message: "Your membership has been completed. You will be logged in automatically." }], user });
      };
      ```

    - Signin router and controller

      Signin router send a api post request to `/signin` and return the response.

      ```Javascript
      - Router
      import { Router } from "express";
      import { userSignInController } from "../controllers/userContollers.js";

      const router = Router();

      router.post("/signin", (req, res) => {
        userSignInController(req, res);
      });

      - Controller
      import User from "../models/userModel.js";
      import bcrypt from "bcryptjs";

      export const userSignInController = async (req, res) => {
        const { email, password } = req.body;

        try {
          let user = await User.findOne({ email });
          if (!user) {
            return res.status(400).json({ errors: [{ message: "This email is not subscribed." }] });
          }

          const isPasswrodMatch = await bcrypt.compare(password, user.password);
          if (!isPasswrodMatch) {
            return res.status(400).json({ errors: [{ message: "Password does not match." }] });
          }

          res.status(200).json({ user: user });
        } catch (error) {
          res.status(500).send(`Server Error: ${error.message}`);
        }
      };
      ```

      As you can see from the above, user password was encrypted using bcryptjs.

- Board

  - BoardModel

    BoardModel use board schema, which consists of a writer, title, content and createdAt.

    ```JavaScript
    import mongoose, { Schema } from "mongoose";

    const boardSchema = new Schema({
      writer: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    });

    const boardModel = mongoose.model("Board", boardSchema);
    ```

  - BoardRoutes & BoardControllers

    BoardRoutes consists of delete router, update router, write router, detail router, boardlist router and myboardlist router<br/>
    BoardRoutes's actual behavior is defined in Board Controllers.

    - Delete router and controller

      Delete router send a api post request to `/delete` and return the response.

      ```JavaScript
      - Router
      import { Router } from "express";
      import { boardDeleteController } from "../controllers/boardControllers.js";

      const router = Router();

      router.post("/delete", (req, res) => {
        boardDeleteController(req, res);
      });

      - Controller
      import Board from "../models/boardModel.js";

      export const boardDeleteController = async (req, res) => {
        try {
          await Board.deleteOne({ _id: req.body.id });
          res.status(200).json({ successes: [{ message: "Post delete success" }] });
        } catch (error) {
          return res.status(400).json({ errors: [{ message: erro.message }] });
        }
      };
      ```

    - Update router and controller

      Update router send a api post request to `/update` and return the response.

      ```JavaScript
      - Router
      import { Router } from "express";
      import { boardUpdateController } from "../controllers/boardControllers.js";

      const router = Router();

      router.post("/update", (req, res) => {
        boardUpdateController(req, res);
      });

      - Controller
      import Board from "../models/boardModel.js";

      export const boardUpdateController = async (req, res) => {
        try {
          const { _id, title, content } = req.body;
          await Board.updateOne(
            { _id },
            {
              title,
              content,
            }
          );
          res.status(200).json({ successes: [{ message: "Post modify success" }] });
        } catch (error) {
          return res.status(400).json({ errors: [{ message: error.message }] });
        }
      };
      ```

    - Write router and controller

      Write router send a api post request to `/write` and return the response.

      ```JavaScript
      - Router
      import { Router } from "express";
      import { boardWriteController } from "../controllers/boardControllers.js";

      const router = Router();

      router.post("/write", (req, res) => {
        boardWriteController(req, res);
      });

      - Controller
      import Board from "../models/boardModel.js";

      export const boardWriteController = async (req, res) => {
        try {
          const { writer, title, content } = req.body;
          const board = new Board({ writer, title, content });
          await board.save();
          res.status(200).json({ successes: [{ message: "Post upload success" }] });
        } catch (error) {
          return res.status(400).json({ errors: [{ message: error.message }] });
        }
      };
      ```

    - Detail router and controller

      Detail router send a api post request to `/detail` and return the response.

      ```JavaScript
      - Router
      import { Router } from "express";
      import { boardDetailController } from "../controllers/boardControllers.js";

      const router = Router();

      router.post("/detail", (req, res) => {
        boardDetailController(req, res);
      });

      - Controller
      import Board from "../models/boardModel.js";

      export const boardDetailController = async (req, res) => {
        const { _id } = req.body;
        const board = await Board.findById(_id);

        if (board) {
          res.status(200).json({ board: board });
        } else {
          res.status(400).json({ errors: [{ message: "Not Found" }] });
        }
      };
      ```

    - Boardlist router and controller

      Boardlist router send a api get request to `/BoardList` and return the response.

      ```JavaScript
      - Router
      import { Router } from "express";
      import { boardListController } from "../controllers/boardControllers.js";

      const router = Router();

      router.get("/BoardList", (req, res) => {
        boardListController(req, res);
      });

      - Controller
      import Board from "../models/boardModel.js";

      export const boardListController = async (req, res) => {
        try {
          const board = await Board.find();
          res.status(200).json({ board: board });
        } catch (error) {
          return res.status(400).json({ errors: [{ message: error.message }] });
        }
      };
      ```

    - Myboardlist router and controller

      Myboardlist router send a api post request to `/MyBoardList` and return the response.

      ```JavaScript
      - Router
      import { Router } from "express";
      import { myBoardListController } from "../controllers/boardControllers.js";

      const router = Router();

      router.post("/MyBoardList", (req, res) => {
        myBoardListController(req, res);
      });

      - Controller
      import Board from "../models/boardModel.js";

      export const myBoardListController = async (req, res) => {
        const { writer } = req.body;
        const board = await Board.find({ writer });
        if (board.length) {
          res.status(200).json({ board: board });
        } else {
          return res.status(400).json({ errors: [{ message: "Your post could not be found." }] });
        }
      };
      ```

---
## API Communication Scenarios

- When you successed in registering a member.
  ![API1](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/323e54d0-61a6-4e3c-accd-ff4dc0a25958)

- When you tried in registering a member but already registered.
  ![API2](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/fc556e37-c5af-436b-9f9a-b23cfefa96b8)

- When attempting to login, maching email and password.
  ![API3](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/940fa5de-4dcc-45e7-a30d-f6c22381e129)

- When attempting to login, email matches but password does not match.
  ![API4](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/32ce99f7-0184-455d-9daa-6f55acf2177d)

- Unregisted email when attempting to login.
  ![API5](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/a30e5e19-cbc4-44d4-b8f2-782c17f7ee6a)

- When your post uploading is successed.
  ![API6](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/4e98f0cf-5959-4669-9913-9f130ddc7722)

- When your post deleting is successed.
  ![API7](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/cd25cafc-0835-446d-96ab-aed79cdafc68)

- When your post modifying is successed.
  ![API8](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/363b3e89-cd9d-4f59-9d5e-a1242eab0030)

- When getting a single post information to be used on the detail page.
  ![API9](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/a9dfa2b7-24ce-4f13-aaf6-f8a782457036)

- When getting all post information to be used on the home page.
  ![API10](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/b7a5662a-d710-4fe9-9baa-6e9f4ecd6273)

- When getting your post information.
  ![API11](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/7242466a-8712-490c-9f4c-e2cc7a683e4f)

- When getting your post information, but it's not there.
  ![API12](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/e7393e7e-d764-4d84-86a7-e04fc5aeb3b6)

- API Tested.

  Before configuring API communication in client,

  I tested API communication with Postman application in advance.
  ![API Tested](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/2f566123-af76-4000-9cf4-e616e780a4c6)


---
## Result

It's the result of all the contents I explained above.<br/>
![Result](https://github.com/Yuhyeon0516/MERN-MyDiary/assets/120432007/ab54fc39-9206-4fa7-9226-9ec045856fe0)

---
## Deploy

I deployed this apllication with cloudtype.<br/>
[Link](https://web-mern-mydiary-client-eg4e2alk8dahnp.sel4.cloudtype.app)
