import useGetUnionData from '@hooks/useGetUnionData';
import ocidAtom from '@recoil/user/ocid';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const Union = () => {
  const ocid = useRecoilValue(ocidAtom);

  const { unionData, fetchUnionData } = useGetUnionData();

  useEffect(() => {
    if (!ocid) {
      return;
    }

    fetchUnionData(ocid);
  }, [ocid]);

  const {
    date,
    union_level,
    union_grade,
    union_artifact_level,
    union_artifact_exp,
    union_artifact_point,
  } = unionData;

  return (
    <div>
      <div>{date}</div>
      <div>{union_level}</div>
      <div>{union_grade}</div>
      <div>{union_artifact_level}</div>
      <div>{union_artifact_exp}</div>
      <div>{union_artifact_point}</div>
    </div>
  );
};

export default Union;
