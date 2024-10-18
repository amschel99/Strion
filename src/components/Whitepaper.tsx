import React from 'react';

const WhitePaper: React.FC = () => {
  return (
    <div style={{marginTop:"100px", display:"flex", flexDirection:"column"}}>
     
   
     {/* <div style={{ height:"100vh"}}>
   
          
        <iframe
src="https://docs.google.com/document/d/e/2PACX-1vSxwCMjDKagbZG7JzNp_vEk4Q4Q9dz49gDrkDxA_ew3rjJbh8GW7xFVTDQxfVcYeVA8f_S_ac5kcFSx/pub?embedded=true"
        style={{
      
          width: '38vw',
          marginInline:"31vw",
          minHeight: '100vh',
          overflow:"hidden",
         scrollbarWidth:'none',
         scrollBehavior:"smooth",
          border: 'none',
          
        }}
        title="Whitepaper"
      ></iframe>

      
    </div> */}

    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'scrollY' }}>
<div>



<iframe  style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
    
        height:"100vh",
          border: 'none',
        }}  src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=CROSSCHAIN%20pools.drawio#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Page-1%22%20id%3D%22q6OeHrMsvS4AjZJZ9Baw%22%3E7Vxbd5s4EP41Prv7EB%2Fu4MfEcds9Tdqczfa03TdiZJstRi7Isd1fvxIXAyNRHAoybvclsQYs4JuL5hsNHunT9f515G5W99hDwUhTvP1Ivx1pmmroBv3HJIdUYjtOKlhGvpedVAge%2FW8oEyqZdOt7KK6cSDAOiL%2BpCuc4DNGcVGRuFOFd9bQFDqpX3bhLxAke527ASz%2F6HlmlUsdUCvkb5C9X%2BZVVJTuydvOTM0G8cj28K4n02UifRhiT9NN6P0UBAy%2FHJf3eq5qjxxuLUEhO%2BcLbZ2sxJdpB2c6sd%2Furj7p9tbvKZnl2g232wHf%2BVwq5Tw5s8gg%2FU%2Fij7AHIIUclwtvQQ2xiZaTf7FY%2BQY8bd86O7qgdUNmKrAM6UulH%2Fkbzq6KIoH1JlN34a4TXiETsDrKjeoZhZkSalY13hUrUHOdVSR35eW5mBcvjzAVQ9EOG1Qtw0zjcOIwaUHHjTWqvC3%2FPkOwCJkur4qQaPE6GIsDpKOwcKL0ZKDoL9WbUbEh9QGZPgGkpPGSOADGnL8CMCwNMF%2FiiVMDMQbqiqttVnESuKMLJ6A0oiwPqesMiPGJrauSG8YJFeraS0hHFoz7oq1KCvmoqVQgdHsJjniAl6tscgh%2Fpg2%2BGBpsKPFQ7N24TDrcP8QCyChW4qCPwUblpRa6V70b%2F0LtmiS0dzQM3jv15FZgqimjvk0%2FsyFjRzGz8mR0bG9nodl869fZQGjygyKfPRTWVymohj%2FE2mqPmNJO40RKR5mwBeZWknFdgSUGmQD%2B5LEKBS%2FznaiovUlp2hQfs0yc72ocJQ7gN9J4%2Bd%2FatcuoNJoJ5maGBiVJguImont1D6bQNOyGuv2HdBMmMYwCTTGcsDPSI6Q%2FYLM8hRja1FSug2rjx%2FGf6cUkS87HcNfPi8CneJGOlrcj6umW06YbgLyi8HunXhWj295tiMNKm%2BY3QZ6vei%2BD2yrPeVGb99Pmf8qynT5mIniIoaf6qfdvDZUAooXGSgFQo8JchiyzUxZnf37Bo6lM6fJ0dWPueF9SlntXQ00GEPkba3KAFS5ml8wFA7y1A88Tvw7s%2F37%2FrFNoIxf439ymZigGZuT2d17wZmbdsri3BcVorYVPHJKImO8UBZqE6xCGbZeEHARB1oBEbaMRyeIUIInJ%2FCuEJJo0As79mH%2B5%2FGZ2opmFyWphI1QLPLX4wb2mfawwrh1ANsCarZsskgqNDKiza1GQRnS30PP25Rd6WUR4lWXWVRYTX9N82Se6VnRsEiB10Q69KMQmmf0TUKTv12Z%2Bj1ANi9%2FIWLdUGKp%2Fwi5Zc73R4Z6Te8ZgNcURWeIlDN5gVUgBLcc4dxpsM938RIYesZM%2BiX1UrOfNQxmXekR8Rs472Xp8bZyPFyE9sjA8nO%2F6PFZL57DnxpYszegvGOVuQqsm0eu2U0vPLuDQNU4fUpB1dzwXMqq%2BUsUINK5MUtp2MDuXRyZy60ZBPtWNJ65wNVyej7TpXFz4lLXPaKRX4dnajlm1GbTCX9pYxsAyoth758gwI0kFYkOnbNPi9hocI4wVTysot8qAdvR9NCfD8C7UBehNF8hMhL89%2FtqIS6PDjPCyaahrPPeTG%2Bc65h2x%2FVQflr06Tk53qrhMVWopkb%2BX5yvX0Lbv%2BgiS8g1q9vzj44VJQcyQrxkA2v5h3G8C5dZVP4lTR1hEktd15t9O5dx95iaJUd0R0NR%2FL2BPRBuX1MOnitihO9XoH5IG67DWa32zkDOYs%2FQBOFRdL1BAgUrDRm2%2FlS%2FIldQRoY7MKo6C4QhkED2Nve7Y6z%2BCH2RVgA%2Bgmoi46udBpnQf3gqKrugEpuiWZoucONpAYDzM7A%2BbkbTM7HfYs9Rzj9f4oujK2zbLZKE0Wc8wmJopVySYmqbVJyiZyVTbb5LDYhmqBddFua5SqDbqELdlWyVcHkraBSyMBqglaPB3RrrtMiq9%2FZ%2Bcpgbi88%2FRbPOL2nhhZYxdhEj9kx3%2FazSfoT46AwklVniHoD%2BosWFdidX8VGmNYMdMEkW4CM7TTK6rAWo4ru6SYafAZIKiopv79E9dcVMWsWbfO5rF9ple66VR8dqyYDW7bcVI%2BrPzHAa5stN02c4An65K3zQw%2B%2B6mttoLqqtDFfxr%2FNkBBzDj3gmz2tyAzkq1oFf40diT7tzYo%2F9ZA67fT1r81UJq3Jfu3KajV1LV5t256PrZYz7dRovmi57rjHu8FjmomB63e0%2FrnKUnqu7UvLVypgPxZ5%2B7jMXvs46lGqqZA1T4mDYs%2FcK%2BjwELJye%2B1wBdkoBH0HZNOePezdaKqVOuApbqgpOLx%2FzbTi828rF0k69L33Hh13K0pWQ%2BTP7iE6jtMJJrC%2BgLT3v%2F89yK0eiuT1GAyrPAD3yDnfnzgZMpjAMoDd0r7NiW%2BLCndlGqNYqDK5jYTT1Y27DuTHTf4RpQZpbER2rLC892U0%2FzgMz1Yejh7x7bJt26kpYGLRBfWY86Nbn6xi9%2BeskBBxRL8ZItcZAXUGMJ6hpYjTXFqUq0SULohaPg4CruHSkTmUuIcb9ywglnOwZ%2Fc%2BZdlYkZX8%2FTdyWt2mdAnvhtUSH3OupP6wKs0djy8f39X4ubpVVq8Si04qcM7%2Fn16f8%2FwDpY48slq%2FUfDLYsrHQ21h3jlbthHalVsezTAy8hd0xM3Jc5SOVYiM00tSondPhavv3ZhvxpoMzFFDUsiT%2B%2BtYcnqfmck%2F32OUbl3xP5%2BI2otuI1tIsN6aYj7BRarbfMHV2c1JTd%2FWD2WIl5Yh6i1jkaeaA2r5qBagDxMYM379N4gQBUnsAzf2jzosPgNx%2FT04pcw9dl%2F%3C%2Fdiagram%3E%3C%2Fmxfile%3E"></iframe>
 
      </div>
     
    </div>



{/*     
        <iframe
  src="https://docs.google.com/document/d/e/2PACX-1vQcT9Ugf7PjyLKk1aHYjKNSk4Ke0D6BHDndui72rG97pKacnjGwaVEsR9z5fR8iXuGf65aSTIP8jtjq/pub?embedded=true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '38vw',
          marginInline:"31vw",
          height: '100%',
          border: 'none',
        }}
        title="Whitepaper"
      ></iframe> */}

   
      </div>
  );
};

export default WhitePaper;
<iframe src="https://docs.google.com/document/d/e/2PACX-1vSxwCMjDKagbZG7JzNp_vEk4Q4Q9dz49gDrkDxA_ew3rjJbh8GW7xFVTDQxfVcYeVA8f_S_ac5kcFSx/pub?embedded=true"></iframe>