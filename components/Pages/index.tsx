import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles




  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"weather site"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>

<div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9OvXp7g_AfJkQ4bM1OWKIf_GkdHCQ1c1yw&s')"}}>

        <br-x />

        <div style={{ width: "50%", height: 50, backgroundColor: "white", borderRadius: 10, textAlign: 'center',fontSize:24 }}>

          <br-x />

          welcome{(props.t)}  &#128308;

        </div>

        <br-x />
        <div style={{ width:"50%" , height: 50, backgroundColor: "white", borderRadius: 10, textAlign: 'center' , fontSize:24}}>

          <br-x />


          country:{(props.k)}&#127968;

        </div>

        <br-x />

        <div style={{ width: "50%", height: 50, backgroundColor: "white", borderRadius: 10, textAlign: 'center',fontSize:24 }}>

          <br-x />


          province: {(props.o)}&#127968;

        </div>

        <br-x />

        <div style={{ width: "50%", height: 50, backgroundColor: "white", borderRadius: 10, textAlign: 'center', fontSize:24 }}>

          <br-x />

          town:{(props.sh)}&#127968;

        </div>

        <br-x />


        <div style={{ width: "50%", height: 50, backgroundColor: "white", borderRadius: 10, textAlign: 'center',fontSize:24 }}>
        
          <br-x />


          humidity:{(props.r)}  &#128167;

        </div>


        <br-x />

        <div style={{ width: "50%", height: 50, backgroundColor: "white", borderRadius: 10, textAlign: 'center',fontSize:24 }}>

          <br-x />


          weather:{(props.h)}&#9728;

        </div>


        <br-x />


        <div style={{ width: "50%", height: 50, backgroundColor: "white", borderRadius: 10, textAlign: 'center', fontSize:24 }}>

          <br-x />


          tempture:{(props.d)} &#127777;

        </div>


        <br-x />
        <br-x />

</div>


        <center style={{ fontSize: 10 }}>

          نهیه شده توسط تیم پژوهشی هایزنبرگ

        </center>

      </Window>


    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;


  let data = await fetch("https://irmapserver.ir/research/api/weather/");
  let res = await data.json();
  let t = res.current_condition[0].temp_c;
  console.log(t);
  let sh = res.nearest_area[0].areaName[0].value;
  console.log(sh);
  let k = res.nearest_area[0].country[0].value;
  console.log(k)
  let o = res.nearest_area[0].region[0].value;
  console.log(o)
  let r = res.current_condition[0].humidity;
  console.log(r)
  let h = res.current_condition[0].weatherDesc[0].value
  console.log(h)
  let d = res.current_condition[0].FeelsLikeC
  console.log(d)


  return {
    props: {
      data: global.QSON.stringify({
        t,
        sh,
        k,
        o,
        r,
        h,
        d,
        session,
        // nlangs,
      })
    },
  }
}