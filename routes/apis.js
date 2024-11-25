/**
* @swagger
* 
* paths:
*   /planning:
*     post:
*       summary: Plan 생성
*       description: Plan을 생성하고 ID를 반환합니다.
*       responses:
*         201:
*           description: Plan 생성 성공
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   id:
*                     type: integer
*         500:
*           description: 데이터 삽입 중 오류 발생
*
*   /plan/{id}/title:
*     put:
*       summary: Plan 제목 업데이트
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 title:
*                   type: string
*       responses:
*         200:
*           description: 제목 업데이트 성공
*         500:
*           description: 데이터 업데이트 중 오류 발생
*     get:
*       summary: Plan 제목 가져오기
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       responses:
*         200:
*           description: 제목 조회 성공
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   title:
*                     type: string
*         404:
*           description: Plan을 찾을 수 없습니다.
*         500:
*           description: 데이터 조회 중 오류 발생
*
*   /plan/{id}/description:
*     put:
*       summary: Plan 설명 업데이트
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 description:
*                   type: string
*       responses:
*         200:
*           description: 설명 업데이트 성공
*         500:
*           description: 데이터 업데이트 중 오류 발생
*     get:
*       summary: Plan 설명 가져오기
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       responses:
*         200:
*           description: 설명 조회 성공
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   description:
*                     type: string
*         404:
*           description: Plan을 찾을 수 없습니다.
*         500:
*           description: 데이터 조회 중 오류 발생
*
*   /plan/{id}/poster:
*     put:
*       summary: Plan 포스터 이미지 URL 업데이트
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 poster_image_url:
*                   type: string
*       responses:
*         200:
*           description: 포스터 이미지 URL 업데이트 성공
*         500:
*           description: 데이터 업데이트 중 오류 발생
*     get:
*       summary: Plan 포스터 이미지 URL 가져오기
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       responses:
*         200:
*           description: 포스터 이미지 URL 조회 성공
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   poster_image_url:
*                     type: string
*         404:
*           description: Plan을 찾을 수 없습니다.
*         500:
*           description: 데이터 조회 중 오류 발생
*
*   /plan/{id}/location:
*     put:
*       summary: Plan 장소 업데이트
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 location:
*                   type: string
*       responses:
*         200:
*           description: 장소 업데이트 성공
*         500:
*           description: 데이터 업데이트 중 오류 발생
*     get:
*       summary: Plan 장소 가져오기
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       responses:
*         200:
*           description: 장소 조회 성공
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   location:
*                     type: string
*         404:
*           description: Plan을 찾을 수 없습니다.
*         500:
*           description: 데이터 조회 중 오류 발생
*
*   /plan/{id}/start-date:
*     put:
*       summary: Plan 시작 날짜 업데이트
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 startDate:
*                   type: string
*                   format: date
*       responses:
*         200:
*           description: 시작 날짜 업데이트 성공
*         500:
*           description: 데이터 업데이트 중 오류 발생
*     get:
*       summary: Plan 시작 날짜 가져오기
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       responses:
*         200:
*           description: 시작 날짜 조회 성공
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   startDate:
*                     type: string
*                     format: date
*         404:
*           description: Plan을 찾을 수 없습니다.
*         500:
*           description: 데이터 조회 중 오류 발생
*
*   /plan/{id}/end-date:
*     put:
*       summary: Plan 종료 날짜 업데이트
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 endDate:
*                   type: string
*                   format: date
*       responses:
*         200:
*           description: 종료 날짜 업데이트 성공
*         500:
*           description: 데이터 업데이트 중 오류 발생
*     get:
*       summary: Plan 종료 날짜 가져오기
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       responses:
*         200:
*           description: 종료 날짜 조회 성공
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   endDate:
*                     type: string
*                     format: date
*         404:
*           description: Plan을 찾을 수 없습니다.
*         500:
*           description: 데이터 조회 중 오류 발생
*
*   /exhib_list:
*     post:
*       summary: Exhibition List 생성
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 plan_id:
*                   type: integer
*       responses:
*         201:
*           description: Exhibition List 생성 성공
*         500:
*           description: 데이터 삽입 중 오류 발생
*
*   /exhib_list/{id}/artwork_image_url:
*     put:
*       summary: 작품 이미지 URL 업데이트
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Exhibition List ID
*           schema:
*             type: integer
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 artwork_image_url:
*                   type: string
*       responses:
*         200:
*           description: 작품 이미지 URL 업데이트 성공
*         500:
*           description: 데이터 업데이트 중 오류 발생
*     get:
*       summary: 작품 이미지 URL 가져오기
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Exhibition List ID
*           schema:
*             type: integer
*       responses:
*         200:
*           description: 작품 이미지 URL 조회 성공
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   artwork_image_url:
*                     type: string
*         404:
*           description: Exhibition을 찾을 수 없습니다.
*         500:
*           description: 데이터 조회 중 오류 발생
*   /exhib_list/{id}/artwork_title:
*     put:
*       summary: 작품 제목 업데이트
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Exhibition List ID
*           schema:
*             type: integer
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 artwork_title:
*                   type: string
*       responses:
*         200:
*           description: 작품 제목 업데이트 성공
*         500:
*           description: 데이터 업데이트 중 오류 발생
*     get:
*       summary: 작품 제목 가져오기
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Exhibition List ID
*           schema:
*             type: integer
*       responses:
*         200:
*           description: 작품 제목 조회 성공
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   artwork_title:
*                     type: string
*         404:
*           description: Exhibition을 찾을 수 없습니다.
*         500:
*           description: 데이터 조회 중 오류 발생
*
*   /exhib_list/{id}/artwork_description:
*     put:
*       summary: 작품 설명 업데이트
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Exhibition List ID
*           schema:
*             type: integer
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 artwork_description:
*                   type: string
*       responses:
*         200:
*           description: 작품 설명 업데이트 성공
*         500:
*           description: 데이터 업데이트 중 오류 발생
*     get:
*       summary: 작품 설명 가져오기
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Exhibition List ID
*           schema:
*             type: integer
*       responses:
*         200:
*           description: 작품 설명 조회 성공
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   artwork_description:
*                     type: string
*         404:
*           description: Exhibition을 찾을 수 없습니다.
*         500:
*           description: 데이터 조회 중 오류 발생
*
*   /expense:
*     post:
*       summary: 지출 내용 추가
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 plan_id:
*                   type: integer
*                 description:
*                   type: string
*                 amount:
*                   type: number
*                   format: double
*       responses:
*         201:
*           description: 지출 내용 추가 성공
*         400:
*           description: 유효하지 않은 요청
*         500:
*           description: 데이터 삽입 중 오류 발생
*
*   /expense/{plan_id}:
*     get:
*       summary: 특정 plan_id의 지출 정보 가져오기
*       parameters:
*         - name: plan_id
*           in: path
*           required: true
*           description: Plan ID
*           schema:
*             type: integer
*       responses:
*         200:
*           description: 지출 정보 조회 성공
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   expenses:
*                     type: array
*                     items:
*                       type: object
*                       properties:
*                         id:
*                           type: integer
*                         description:
*                           type: string
*                         amount:
*                           type: number
*                           format: double
*                         created_at:
*                           type: string
*                           format: date-time
*         404:
*           description: 관련 지출 정보 없음
*         500:
*           description: 데이터 조회 중 오류 발생
*
*   /notes:
*     post:
*       summary: Notes 생성
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 plan_id:
*                   type: integer
*       responses:
*         201:
*           description: Notes 생성 성공
*         400:
*           description: 유효하지 않은 요청
*         500:
*           description: 데이터 삽입 중 오류 발생
*
*   /notes/{id}/content:
*     put:
*       summary: Notes 내용 업데이트
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Notes ID
*           schema:
*             type: integer
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 content:
*                   type: string
*       responses:
*         200:
*           description: Notes 내용 업데이트 성공
*         500:
*           description: 데이터 업데이트 중 오류 발생
*     get:
*       summary: Notes 내용 가져오기
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Notes ID
*           schema:
*             type: integer
*       responses:
*         200:
*           description: Notes 내용 조회 성공
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   content:
*                     type: string
*         404:
*           description: Notes를 찾을 수 없습니다.
*         500:
*           description: 데이터 조회 중 오류 발생
*
*   /notes/{id}:
*     delete:
*       summary: Notes 삭제
*       parameters:
*         - name: id
*           in: path
*           required: true
*           description: Notes ID
*           schema:
*             type: integer
*       responses:
*         200:
*           description: Notes 삭제 성공
*         500:
*           description: 데이터 삭제 중 오류 발생
*/

