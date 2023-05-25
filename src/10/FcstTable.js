const FcstTable = ({ item, gubun }) => {
  console.log(item);
  console.log(gubun);

  // 항목: 기온  예측일자:  fcstDate  예측시간: fcstTime 예보값: fcstValue


  return (
    <table>
      <thead>
        <tr>
          <th scope="col">항목</th>
          <th scope="col">예측일자</th>
          <th scope="col">예측시간</th>
          <th scope="col">예보값</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  );
}

export default FcstTable;