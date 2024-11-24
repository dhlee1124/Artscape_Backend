/**
 * @swagger
 * paths:
 * 
 *   /create_matching_data:
 *     post:
 *       tags:
 *         - Exhibition Matching
 *       summary: Create a new matching record
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                   description: ID of the user
 *                   example: 123
 *       responses:
 *         '200':
 *           description: Matching record created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID of the newly created matching record
 *         '400':
 *           description: userId is required and cannot be null
 *         '500':
 *           description: Server error occurred
 *
 *   /entrance_fee:
 *     post:
 *       tags:
 *         - Exhibition Matching
 *       summary: Save the entrance fee for an exhibition
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the exhibition
 *                   example: 1
 *                 entrance_fee:
 *                   type: string
 *                   description: Entrance fee for the exhibition
 *                   example: 무료/유료
 *       responses:
 *         '200':
 *           description: Entrance fee updated successfully
 *         '500':
 *           description: Server error occurred
 *
 *   /entrance_fee/{id}:
 *     get:
 *       tags:
 *         - Exhibition Matching
 *       summary: Get the entrance fee for an exhibition
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *             example: 1
 *       responses:
 *         '200':
 *           description: Entrance fee retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   entrance_fee:
 *                     type: string
 *                     description: Entrance fee for the exhibition
 *         '500':
 *           description: Server error occurred
 *
 *   /scale:
 *     post:
 *       tags:
 *         - Exhibition Matching
 *       summary: Save the scale for an exhibition
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the exhibition
 *                   example: 1
 *                 scale:
 *                   type: string
 *                   description: Scale of the exhibition
 *                   example: large
 *       responses:
 *         '200':
 *           description: Scale updated successfully
 *         '500':
 *           description: Database error occurred
 *
 *   /scale/{id}:
 *     get:
 *       tags:
 *         - Exhibition Matching
 *       summary: Get the scale for an exhibition
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *             example: 1
 *       responses:
 *         '200':
 *           description: Scale retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   scale:
 *                     type: string
 *                     description: Scale of the exhibition
 *         '500':
 *           description: Server error occurred
 *
 *   /min_people:
 *     post:
 *       tags:
 *         - Exhibition Matching
 *       summary: Save the minimum number of people for an exhibition
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the exhibition
 *                   example: 1
 *                 min_people:
 *                   type: integer
 *                   description: Minimum number of people for the exhibition
 *                   example: 10
 *       responses:
 *         '200':
 *           description: Minimum number of people updated successfully
 *         '500':
 *           description: Database error occurred
 *
 *   /min_people/{id}:
 *     get:
 *       tags:
 *         - Exhibition Matching
 *       summary: Get the minimum number of people for an exhibition
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *             example: 1
 *       responses:
 *         '200':
 *           description: Minimum number of people retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   min_people:
 *                     type: integer
 *                     description: Minimum number of people for the exhibition
 *         '500':
 *           description: Server error occurred
 *
 *   /max_people:
 *     post:
 *       tags:
 *         - Exhibition Matching
 *       summary: Save the maximum number of people for an exhibition
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the exhibition
 *                   example: 1
 *                 max_people:
 *                   type: integer
 *                   description: Maximum number of people for the exhibition
 *                   example: 100
 *       responses:
 *         '200':
 *           description: Maximum number of people updated successfully
 *         '500':
 *           description: Database error occurred
 *
 *   /max_people/{id}:
 *     get:
 *       tags:
 *         - Exhibition Matching
 *       summary: Get the maximum number of people for an exhibition
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *             example: 1
 *       responses:
 *         '200':
 *           description: Maximum number of people retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   max_people:
 *                     type: integer
 *                     description: Maximum number of people for the exhibition
 *         '500':
 *           description: Server error occurred
 *
 *   /region1:
 *     post:
 *       tags:
 *         - Exhibition Matching
 *       summary: Save the primary region for an exhibition
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the exhibition
 *                   example: 1
 *                 region1:
 *                   type: string
 *                   description: Primary region for the exhibition
 *                   example: Seoul
 *       responses:
 *         '200':
 *           description: Primary region updated successfully
 *         '500':
 *           description: Server error occurred
 *
 *   /region1/{id}:
 *     get:
 *       tags:
 *         - Exhibition Matching
 *       summary: Get the primary region for an exhibition
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *             example: 1
 *       responses:
 *         '200':
 *           description: Primary region retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   region1:
 *                     type: string
 *                     description: Primary region for the exhibition
 *         '500':
 *           description: Server error occurred
 *
 *   /region2:
 *     post:
 *       tags:
 *         - Exhibition Matching
 *       summary: Save the secondary region for an exhibition
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the exhibition
 *                   example: 1
 *                 region2:
 *                   type: string
 *                   description: Secondary region for the exhibition
 *                   example: Gangnam
 *       responses:
 *         '200':
 *           description: Secondary region updated successfully
 *         '500':
 *           description: Server error occurred
 *
 *   /region2/{id}:
 *     get:
 *       tags:
 *         - Exhibition Matching
 *       summary: Get the secondary region for an exhibition
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *             example: 1
 *       responses:
 *         '200':
 *           description: Secondary region retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   region2:
 *                     type: string
 *                     description: Secondary region for the exhibition
 *         '500':
 *           description: Server error occurred
 *
 *   /artwork_style:
 *     post:
 *       tags:
 *         - Exhibition Matching
 *       summary: Save the artwork styles for an exhibition
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the exhibition
 *                   example: 1
 *                 artwork_styles:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of artwork styles for the exhibition
 *                   example: ["abstract", "modern"]
 *       responses:
 *         '200':
 *           description: Artwork styles updated successfully
 *         '500':
 *           description: Server error occurred
 *
 *   /artwork_style/{id}:
 *     get:
 *       tags:
 *         - Exhibition Matching
 *       summary: Get the artwork styles for an exhibition
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *             example: 1
 *       responses:
 *         '200':
 *           description: Artwork styles retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: List of artwork styles for the exhibition
 *         '500':
 *           description: Server error occurred
 *
 *   /my_style:
 *     post:
 *       tags:
 *         - Exhibition Matching
 *       summary: Save the user's styles for an exhibition
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the exhibition
 *                   example: 1
 *                 my_styles:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of user's styles for the exhibition
 *                   example: ["minimalist", "vintage"]
 *       responses:
 *         '200':
 *           description: User's styles updated successfully
 *         '500':
 *           description: Server error occurred
 *
 *   /my_style/{id}:
 *     get:
 *       tags:
 *         - Exhibition Matching
 *       summary: Get the user's styles for an exhibition
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *             example: 1
 *       responses:
 *         '200':
 *           description: User's styles retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: List of user's styles for the exhibition
 *         '500':
 *           description: Server error occurred
 *
 *   /partner_style:
 *     post:
 *       tags:
 *         - Exhibition Matching
 *       summary: Save the partner's styles for an exhibition
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the exhibition
 *                   example: 1
 *                 partner_styles:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of partner's styles for the exhibition
 *                   example: ["contemporary", "pop art"]
 *       responses:
 *         '200':
 *           description: Partner's styles updated successfully
 *         '500':
 *           description: Server error occurred
 *
 *   /partner_style/{id}:
 *     get:
 *       tags:
 *         - Exhibition Matching
 *       summary: Get the partner's styles for an exhibition
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *             example: 1
 *       responses:
 *         '200':
 *           description: Partner's styles retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: List of partner's styles for the exhibition
 *         '500':
 *           description: Server error occurred
 */
