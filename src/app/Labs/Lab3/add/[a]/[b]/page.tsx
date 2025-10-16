interface AddPathParametersProps {
    params: { a: string; b: string };
  }
  
  export default function AddPathParameters({ params }: AddPathParametersProps) {
    const { a, b } = params;
  
    return (
      <div id="wd-add">
        <h4>Add Path Parameters</h4>
        {a} + {b} = {parseInt(a) + parseInt(b)}
      </div>
    );
  }
  