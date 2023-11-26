<template>
  <q-layout>
    <!--ヘッダー-->
    <q-header elevated class="bg-dark">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <a
            @click.prevent="router.replace('/')"
            class="text-white"
            style="cursor: pointer"
            >韓国のおばあちゃんち<q-tooltip
              :delay="1000"
              anchor="center right"
              self="center left"
              :offset="[10, 10]"
              >リビングに帰る</q-tooltip
            ></a
          >
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!--サイドメニュー-->
    <q-drawer v-model="leftDrawerOpen" class="q-pa-md bg-grey-4" bordered>
      <q-list>
        <q-item-section>
          <div class="text-h6">Main</div>
          <!--名言集-->
          <q-item clickable v-ripple @click="router.replace('/wordList')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDwx5rV0DBrA64ZL9v4F7bkFdYJzyJA50Hoo1pgRXNP7T9Loye1r4-_makgXNRnrqqG926m-_IsQsNazZFUA3nHusZApJXJxUOb3vR0g772eoKHYHtjYKwPfDkqq4L-wzRFqiLJFKdzlMK70U9c9fQM-0lBHwftd0AydRgR4f4HofITGg0z_27YB8DZi8L34sXDwla3_Jt4-UAqGibBqiPhn7f-0iCiq2FYHiKx1zclFuTLMcO-110bLqpR88jA_B2Os-vZBL3C2CtVi8qRz4-khY73eWSYYIrHSrZVNI82pXRonhMVFLrWJYRmuwwcwtWA72RoOcgFE-Dfv_GSVs-GVT30UR3O512PDkm2jEX0k_-mIGgYX7HGdqznDpfsOQ1NYuzq8BJ7Zwo4_7tn8rg9Qhrr5xxNGek3BTk1JC3Tbxp4xTZSromwzcVchXOzMbFEtbNI9VYPmkRfvd3Qn7WV1-UJ8LJkpaYiW0AYsVxnE5XaMxDG1BYF4gUiMJAag2iBao1inwrV6oLcBaDvQ4DDfl_2ADn-wmPigoHyqn3uCaLozhOWxM8rygALaTAHq7boj0MSOMld0_2gxJWkF9MIyDFJmjTF5Eh4CgNhWIYCcIo3VW1N4BeUPn6lJx9bOVKPW_rDO7s3kZ9bpL93mr0gxaD5-ZGUfo94N4lmIEcCNvaSY0sVjzlL63vDYgA7pK1U_Np5ZWyYivqUqwBG1RPl4Va2YkOT3BsJGFQ8evGsZKr657BaHI6rwRegLiNcPzhhX_aB8bCx6McJIAFrvdP2quffnbJDEAGWKuvARZ8lTNIAUerXWAOEdOhtp1xJsDSpmsiNywCv5c6-o5jN6znxyBIetTx9HgZQ4x6UUd-xvZ7oncuw-cQk7MZAzxGCGCN9RvQjwBRzhvXrOd8f_w_eu3FF8fIuGiFoUkB4q28NpuDWA-Git4s4s3Poyc9bbpOoaYaR2dsihtCYURC7B_yvyaSPDocuAhx5m-jm11lIo2BxOzx9jyg3Gbi95ePUYciV0Iv3qkpUktJPfaV_389oLmkjdSXNYGiHEW3fqRH5qPmv6D9q1w-3jYWxHHr646bfYfa6CxthbigQZotNpuwPvaTY1NXpvtuy1B-eHM1eoaxrSRWDrvRNKav2_0x3td0lxR-bVPxZECdvjy7rV8NxFm_uhXD8E0x3KlvXDLot1XmFynErGZgib3eYiftmiyBOv5VTI5uuoJX90u-q40aeGnbJvyExQQKe5jLZOia5wZvVr4tUIIS3yi_rvwdL7kkRKS0IVOZ34XErRhV2EY98cP1tXN4Qh1n4PjUwLNbFw6SB6Jx_yThYtfmXnIkzmtemFPoOimjtXZ9jAEkLxlGdS7Ro1WJGzgA9IlBvbut8LblKcMDvMXkjXFHBlt1w9PwsEA8a8RYX5e156gz7QLdWchUDw04R3KiWqXjSeMpXO3eS0KxVc9wo77COS35wyArLy3wgRO3-o0hxiceXhttlmj5F2aW2GZGcD0VwlaeTRsAfIoUKcgUv-SQ=w1754-h1338"
                width="48"
              />
            </div>
            <q-item-section class="text-h6"> 名言集 </q-item-section>
          </q-item>

          <!--あだ名一覧-->
          <q-item clickable v-ripple @click="router.replace('/nameList')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDwcXt8po4mjouqv4RS46iIDJ8N5B7JqTgoLCAv5I7We4G5U8oCPWLe5ooY0A3c1Y0CgVW8Ye9UtjVzlxT6P4Tn90Qye9NB09C9KMqlugEF9TwVWCGNrCCVeHeAHcBOPAjlSzob2uHogptclf1n-G4Z6I8TZF-yspUltiqfRopAJMWV2Qd2-Ok0ikixEbN2LkjjIhmMbmxUf1E9bDT5uqDO6MKWVa0Ham_F6My0ybxR6rmFMpFUq8P8iIwGcP9Xr8flDgKLIj3Aklu_uJKc8JRbdoX2XfoLhgKJD9qaVi5lMYAd2ymDJPSKwP0UfQAqDirVv7_uk3Ue9ltzpuYS1znVsDxZH6FhxhDBLIfhuEpOotDjzDHw0pK0UsSXUgdO0nkfym2bzVASKwBOdGk5udwkDHAMUffSGwhoAU-FW0PyVge8INSk4BjeEEWr6X6-i7vmxZF0VHi0uIUqP7GPNu6fVzZudriB0tbvMDdYOFYE19nfGXLd1e4RdhrVcH4Lqs9hmV7tlQ4ckQ19_Kp7NfazcbYWzDYSI80eKlrrrhiyb3xN1z4E2HAaxIcIaE5y4QDuY1mclnIlawWZSJk0SkLDt4KEb-9QrSwzhzRXtQaYZCaQxHxRbvlaVkHzP1FUjMmwRtC7QktfsQutXTpj87GbxPa6tCbo4Z0o_RDV-Z9rJ5HvNdiKRnsIOCWAnwfHAGXifAACJWyXckfsXxZXb3H4To-ONZwXsedbMx04R7exoz49rAV3qQCeeCbdt5R1TDQpnrvstZ95IUy44Q66KKFE9hxJNHfRXjft5kVa9IK9pHQMRI5mCbNQWvygNEZty9vswYYGTv_Vcj9tmiU_J1Kp4zsI6Iz2LewNqwRBHAPpYYVHf8m_mi3QySLzZBi83HV5izdL2SkKcwX5MQ0S77MKQz4mOtYtIEIhqqB8xM6Z6RmEvrpsiF3eHPkf9e7VI-0_r3Io9VVVTcNQVqVzHgiT78HsvM_BamUX3pv3OvZfvv174japBqqxQ3y_hFVFiObcCkSGkQyTmGceyclvhMx2BGGqbn_QjvuR92naHgFjAdYQkceGWq_xkoxRZ-VUxjdCq99abmfONG7iMXnrTSFxhwWmTcXabiKTEAh8j1F1BTvlTDChs9-Xc4GPoQSaL-fd_Z0b9iaJjyTOh8leTjD7iS5p0Q9Ccu94B_cHgFSNT_3wOcxYsiKTZuD8wsIxPzd_x7kJZG4-lxUCsjKuOqiaIK5HL6qYx8joa_6BKfI21BlxS0YGy8MW2uhWjdeS-kX4edD8ZKwzTnIOckktuyG46I2zSXmtqScd0xfzj9aXbdKFbB5HLrck1XaHykIPBq33_T-hBVbl-ann_ajdPZeNiNxajmdtfqziPumht1saD95e4Mv_8apyJPhsRDxSL1M-iMgUzaIz8ZkN-dZt1muTFO5smcctbz6JWcQleg3GPSiTxjUWcrqztv3sFH-xhlzwl8mE_o4Hz5qggXih1gCEoT1fgytULSq_azXZBsic6qO3sfCRsl1Umsw=w1754-h1338"
                width="48"
              />
            </div>
            <q-item-section class="text-h6"> あだ名一覧 </q-item-section>
          </q-item>

          <!--焼き直し条約-->
          <q-item clickable v-ripple @click="router.replace('/yaki')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDwhCLqOQiH57-161cuUH2n8xM-XCPcAHDjLEn6e42Qftwj0fzoCa6Sg5_NovVJrbf_ugyfAtVrLM5nskblwReVTv3wYu2ehHSZGzNZUglJGQ-wxfCqm5qlg3fFPiWejnV3Kw_5xv5hlO-RkzgT-1wwT9rPvB8CyZXPn4UGNUnLWvXD0jTiq526XjU74YFl-Z63WMNWUHj6D_SDV0oP6l8vPFnklikAudBQsO3UGH0KDe2CDhS4vuy4RmOvwUXqqBV8T97TwkzScNgMQhrnCHzmg2wcFB4OaG3joAEl-uE70KAo8mGaoXMEh2nqcm1ehHCZdGJrisjVX13WjC9VZlU6L5ClRTbM3dBcH4BD9PlPL4CleVRVUilzMOpuDjwL-uAW4mR62B8TTQTsufq7mWml3Rs3b-JXMT-mmydl3aM7EzJSQcwPL0_tuLn2F2O_WeXECUtwdrt0lYnF1xdDbOEQX3K1M6oRTzSoB1-wkQ3VoH6O_pB2AkGfsfvhaKp_OF-aedtwe6i_cOSRDteji-xzT6C6ryCNXnGX_AubRRydhWxla3kdNaGbuopeXeXi8gTTtyq87-DNkuLdr7ZDeWcWuCthKoRvPLAEf0sjvitNFMBBGq8c5tRNogxTSP48HWqx7SZCmrXkovQOTAkBU_rkmk2N6wLpZ5LxRQRjPiIRw4GAFupjQC0pTIsdytAf8rtBsL09GqzAbzk78jOCB1iJ2SRegWwBI69BQMR3yl7RDO7PjFw9Ow8Qxlw40iTDAvYDp5u4aogNhA0retPlwt79Ch5qIv802t18cnmWSY10xA470K3rVCG5l4aAf3W9NRDhaAF-cieMQqNLWUdqpApReV_wD1mxjollQaNfEpVbeHGRfNVYuDdzJkfdzcUHDSC54l8Vm0Nqambfu_bXhSQDUh-flaEnKkb8T7gp7mB2Hbbbtr883JeXq5TxS_plnOSA4k87cR58_CkRSsIN4pBNkSFNQth54iEGOewmjfSrZdutz9aapglVzRnIfeEFWffjnvhmEpPTJY_jfelDjWXI0-lalAmPypXiPUTKqwf1nZtQhZd6agMpfOHFYM1JiUikkN5VotPHrkxpvzD1aOrc73xwshH62afFH4Oa4wIEcK1saxkz2w82M8euvYv_dD8nD552fQQzgAGuWxf1pkka_bq8Uts7FJMsYn9zJrwh0TxtbqZd2kduDD9xYs-O_MY02S15MeZOkX8JbMd0MzEbhOBRwd1N6dPivfhzHnSuKFUN7gepips5DK9GPtKbKuyrGoMNTJsZKiJa-F-ed3BX_PgUT3wkEAbDvT8CHZ4LGnqV04jiY-Pn0B2sa5pquqV5kYKFcMz2w81Qbt3HbKOjN36pswkO_9iYbeExY_AhfZHmnCmuNJXXRiXFZvHY1WbNIGrNd_N0KphJ_BPVOvRfIVwkQ_mhsuGUQb0ZgfnHTaSeyikOB4XcZB3B3P7_pvvf8C3nkhXNUbMDhUa1xDKFQFNDc0gpWCdWsKCrTrrR66SyaLU3X4lVR1g=w1754-h1338"
                width="48"
              />
            </div>
            <q-item-section class="text-h6"> 焼き直し条約 </q-item-section>
          </q-item>

          <!--俳句王決定戦-->
          <q-item clickable v-ripple @click="router.replace('/haiku')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDzbWE7cvPP_hVpNgDWv1LDvSOhEgiRaxCBxvG96iguq8QkWzRLSfdwJ1II2Ufdpfi9iZCJDUIKkZkPNQqHluhhYH7HvrYEC7BucssmqtMQoWtMZl6RBt7KyX78enX0BhSLQJ92v_TAJE0i1S-J6IAclMYqQKvrausCbIexinngqN4EHnSl7M_9TIfE1hrgueApGdtifUBppo9QbdeRa_KTbsnhExwAai-BqTcEEpyGulwDB1HB9P1TL1BEPA3IinX-YSGGxG0RslPj4JHZrDJBPqCw-2p0YWqZtrxmPJ7-LuXo8Xstb9Af7qoQWFIoo3fE87-9mqX5xRbghCbhhbfE7PF3uTnRoOn-YO1zRBEW3hxGNgbssetuCy1xHTRZGtu780VAL3xlNXdfuzsR_flsZlPYbe4Z1STMNlmY5YLuSwP5lrecBrsxetT_mfQ1MRwkRIRkKeyMyqzgYERRWM_Gwdmi8Qr3wTdc5aB-vqP7UoB8cs0352w8IT1Kuh8UCud6GlSlQdtfxIfEZ-27Xca-zBSLnTl8A3RTC1jEbqBOOTYHexpl7s5rNvcKpm4g0P8Gj3Imb_UCF_KEX7yHDzHdDQcu8XGoogD__4koX2yEIiliW7aaOF9LNwydKI9cD_4X-zXy8HhBrkuKIdgg-ep6gAZMDlAIuxKzvfYEo3ddZbxsudrmkteUEEMoNRW7k5gPh3RdNVdpP85M7ygQOxgFe8pDSTV7K6nBa-C5S8ihRndwmnUtK11ovmB7NsTYqZFTtVO3Ek7LZVMa0dMeswCJcLflSGJ79DdkxTTDndi0BBUV8HALyEeZbltvCqxRU9uAUBo12IL9nYURUGgP3ry31V6o3eWhHhq-N1H_f6bcxZ5v9-_dvpXabAwCqheXgYwUVzmifOjGiRiqbifCb_Bb30pGD_BH-1H7yJfW_3M3dHmd5CzmfR1UWy2sjaPCVYKVa74nXnXE56HQz7Ue4-aaUU5U8dyCoNWJXgbTS-oJK-H3bTSaIo9z3kIbDaumSJ5evbtXVs7RljbIl2LFNrEjJ-2qPGVJbevLUxai6xZFzS1bbHkZukzHQZekwB43OmjVLJ1FNnseYVviL2FIntiEEyjyfMqst3AkzZFepYRMMfq0XKtYqrKSqeEz_VdL0qROflBy0jiDvJs3GGLVxBR4dcWR-3qx9G9G3Ljwhba3mvynaVJaeC6dp_vVK9iXziSTRvQ9pS-wFk1JLI2hk97VmklLLkstyaDdAmnHtxYlsRm5GPGJsGtQ6CIi3VnC3hQ5f7E9hgIiv3p8An-sy03IFedleVDobWposxITHBzEnBGCePMMLEhl_Ng9l3Wz3_N_9qWmTrLHIDbFJAt4lNkqcptCpyBmmsbqAU0dYYJ8d0WT-dKmPycGBIDv73IUhmPwC4AC1ftnUGANcn-fEpA_JUhTAWTpsm1UMiSKgqZQnOl7zx4ou4KdBJMsxEP9Efg2coMg0d-uo9mimTC8LJPcv8hndEgnLwM2rBeXT3X1Da7tz8z8CLxA_rg=w1754-h1338"
                width="48"
              />
            </div>
            <q-item-section class="text-h6"> 俳句王決定戦 </q-item-section>
          </q-item>

          <!--学校一覧-->
          <q-item clickable v-ripple @click="router.replace('/school')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDy-HTScmZeKl6q_VaRXbW5yE3-F44QEn0OE7CLny5UZRHAIK3pUUUoiM7kp81IgN_nQcRPs05bbMPZC-2QK3qV5HEasqyCE3UgbNADgC-GB-svwpyAjtryJIlMt6XuiEqL1ojItio5kr15qQCZv7-CEfVqSVjErqoutr1FZj8U23ozD8gt7vbAilQkAWbqCOlWVq_uxTgFjklkmY0DtqRc2-cTJBSOqaTmkrxG9qJa6NucEOw3Vl0xhG-bVkTiSKwAxjH88fJi6NzpzaQTzeVB8p0XIayg8WzJjh16qEvqNh5V3GgKLDUwfWN9IIAAUEb8I7CqmMGgsbOsJRujDSRrA-iTW7LRe1Jjx-VTxju7jP8H4a1ABfmalSDSKh-G8nNplZGTed7h5nOjJQ0ZGfAMnSv0RuTqSiGXtCoR1JTeyl_7RbqM4Swu9kTogIcecpVVLCkOt8Y53o37NiP5gNI6sqlaHcIg9HAz4ckYkk6nKydx-wyr4Vcv-XyS2t0z6jZCFaDQIikvNUGhNoVGLTeR1MDYAmSq3-R9j-ulzTeP7XktShKvvFuz9jaMd-YlXcBnRzGEN_y7AIYTWuujxl-tVGAESokES4TB8Dy0H3cV0irPMow-_Qr2W8pTF1LgOvIy8HW8d7aiNGNL4uVNtx08AQkGo8cj9-bGQw_8IhUKEstVnSUpov5sO4UVyLWX-_D9lfscNDW8JxS7CvXziWRwS1QTpIWxE418ePLBo_5BOznL_4FntZjpRZozHIIScEx_Ki6ig2dt_276ZXAMbpjCroExLXEXLPYQMZsyqh3nvErl1lu33azLe5OOHEL94z7f_-ryHdS-nvM9ET2Z4DxCAxirKF7otZJimjVxHQKbUTg0sPHh7KRuyIv_EUB8JYtRiyB9ucQ17-muqGTvFeweAmt6KxgSP1abxJKPkjQoKr0D0nK7Pf6w5SYNAw4XMJ2q3b8oNrh1aAPc8BJGqzqpM9D8kYPMdZvOjaJuRMMWLlNEAL_1iTLC8utfZlB0NarsuZOQKSQ7c1eUc5XpgI8MI38YSmKHFUgSa38oVpF5XDTd6Fc3SjyFma3T7z5-Qrw50bZGh3aGv8-4TQApS_vZVfx4VYLWaW-Jyl2oRsr8Pl_hxuM1RJe5QUJUUwNt2EYr0CGqujHzufaHwPmUyD5zL4EfesCkrklduOmcnyxjTBSUO8z1Z1InUb8BaRfz4GLcccDIOhG_E_mcw2g6S5S2Vot7vlUzjXxHIzlcXeXlHqgcW4zAc6h2YTGJPNpAJB8sfFdWcJ4ArehnRXWOlCVpUzw8p3ibDoqiFJie4MZ_CfDdyUI0SvsUX-EpIm-GdcFVhTU0BwfnZspAnQBrypgNgLqyIhkp-xxIWvaJsR9ESwN-htk354-8hxiRdgyIfgbfuN2qLkR67JScRBo82ffA_HXxex27nvCYgq0UXyiXChoCALMc7QFunePrGWuIfpITMUNDhAz3TGLBCEwxOXzvP5jToXnklviAjYUui3-i256RpY-os84eu_A=w1754-h1338"
                width="48"
              />
            </div>
            <q-item-section class="text-h6"> 学校一覧 </q-item-section>
          </q-item>
        </q-item-section>
        <q-separator />
        <q-item-section>
          <div class="text-h6">File</div>
          <!--カラオケ-->
          <q-item clickable v-ripple @click="router.replace('/karaoke')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDxkXPRvtEZPhstOM3ET54QZ_3bch-gwFFoxkd903_E9cRgI5olwCgv8K-yHpRD_49KfbrT9l1J9dKlaL1k4n2v4jKW2KuyQ4Q8aG-cxiYdTTEYB01b8jk59OAYdvAyflRfzJ9uxYnbcXH23-BIIS1o6sU1DTOmFphomYq9twNHSyI2OTn2hUMfbe4gyL_WAmepWG_cD95sDN9RKMF-LxZsRRnR0CJXP3wtC-o5hscACTofSldSvk5PrHEuRJJtFtbyow5L9wIZJb8gH3aYGUx-HBDGZ3gxyU26lqDi65B8HIBOeZliSnBZn32Vsk0iqvbRPLW9eCExd7Qm9F9dh4M4cfx6hZ3ck5T8jJMAWPL_P29jV3K_ThUXVTUwk33uYqb55gKnY1r5QnzJ9BXNY-CkmORkaFrYix1CW127EY2sbkQbQgEHGSuUjRU-jXSp4DQbqa9txlT4hEyAaRtDA5C9n907W2B2KnBCEnv3HbrR9ToFksvllCU9tr70RaqKrrfGmUQW0RsZLaOdaMqqo0yoG1ecXCTcYB3SIwSMyFXubZ1a111NHd-ul2LD-l-eAXaXru08ZP9OC4iGiGjTNxUKhdOiVRDJnctmKzFc6JscFo9WYo33-8ZQGjV1ypKU68hamHlePvr_WKtc8i8388PjoVeTk5u5FaDJVOvJJ9X-MHqYtxTZNAdUz_sRvDcSyc3NkOhFsx091aAvX_PJDvjPZP50NziCupkRYyo9hQDq23407ea6xRKENHrYPH2B5llDEGP9XsYV0Af6RXiKp8UtKJiBc13asrbkSZTmr5CYzh7a9-tn1aq0Madv5WTC_WEdP9wZCEWc273BKhF-z-1XfxtejsLMeEc8OOKg16-ydiWrLCo7y1T8O-HCkzMxFgwUhf29RuhDKrLFaX4knJ-EkhG65kQLAqAu70u-M4wLXgUi-oqtUEOwqJ3pGSx9vVSmvWkX3F_DIrWjecu8ylpQIwFN3uzH8XeMvI1omI90IK5qs110GBrPuAx1rteY7Ho5VdQTmDqtChVQFOXX5yi91-cnwSFib2oBHRnot3hr90byeW3jLTgC7Moz-CJrhi9rQ2sCgRquA9CYnCgVTLVBc-Fk1wseHbTC8m4GufkZq131lQ-pKAXx8jvZ_GTpRunOLE-yojmMVIRSNMhrKaaGOnp3zm282D6EJCCMMe2j14_hFC9k2UZY1e4DdKz53u42HkXgqwZzHyTN9l7jnN0F9pVb9_ZJnkdVoPc8-kSFfnbugoPZdQfMLBC1hyvgHYTh4Rgu9bCWIOME-dinEN3cmuLXMkqx2MKfuAC-hA8KrtXFjyu6y_0sRylpkqN4jj-DK9PTjdcKD1fB3gff_YTubUcBuDFgsj3gFItPdTOIcHjzIhSPoRRc9rLVz-1f63VaEVy2D-MbF2gAYNj9P0I-N3fNKY_rzHLUVLRoPXaaitxsdw6Y34K0gIn3mdOe2xedl29RCxKeWMsPejPzJHVOeptR9zZUCvoVRTicp2n0J-CD1NwWK-rLTqw=w1754-h1338"
                width="48"
              />
            </div>
            <q-item-section class="text-h6"> カラオケ音楽堂 </q-item-section>
          </q-item>
          <!--ボイス-->
          <q-item clickable v-ripple @click="router.replace('/voice')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDw5PjKNJXLptCHNJ1zm8Sr00uffr6Ws-Dk10q1FgHfE1VatplMz3II_Q1jZ69OW8IRztIK3fW8_xI4mS1E-Kh--h892gBgaDHeQGMEUcKLEKyazEnQ7uJvuw2jYpYew8z75YZAruP4S5hUxQNNPag_KTNhxPyi4W51Ar647UG70ul43-sPAv878opaqyRUqhJu2Sf7l_CcqL_x-sP95mKSacr4uwduWj1M2TlB0i4oF-sEU1SiHf19HStwteRoHr_Z5KccemOYupYowy1pccZR-1GFWhOZp0z-hW2f4-nQ84rGOtd_shdIKVUSLaa3dLX8kYkdH0tWwTPaHtfaJwtR7aJZu2HSz2PtMvHVReFdQYS0YU_83cSwgGYzl-1LEJep1WDMDTuyAnXClMKEU2lcpXnYcsnXRXuW0WBUL0TNf2XDLY0z2V9esVLIh1w1CF-CaHiGbpOVQJjKj5BASvZ6trFdTrJI0wdOK8Vo_wMxz9b_SqheWzBV-iHjHm3NJnFhhl-nZnCmG5j0whdl4VTHby-FNM1yhF9vNYjK3M1zr6eKV1cGhfKOjk7p9UPm39vgARznN5dOcif6SgZHLxTxyfN2Q7yNgIZ_W80OYnu7w20VWNbcxYWB5nvVTxDqiYwcRSgHOxMYO-SBa4VAb0cndPNiKJSowXWM5tsdZOEjChLuc6rktHTI-2e6snQcxLT7AVhxJcvB974xhAl6Rpbm-UUaZBDtQjJ-tDSvYg97Qd-XpnM7CX5FSgWILTC-_byrn6SWq17SBYL-mSGZL8N_1rRpyhzwmaehslO-HqhLVRmRI1T19R7dvG8gk3xNwWt7tkJNBLfmFIe8vFqeqqrsiOj5t7Vg3yVCRBNzsv2huIrrhimXrFeUW4v9LumoAM67s2xxs2nfzuEBHOVeU1dvOPQz3zl3XtUMinaU4111jnpN1t-A77aDoWhaIHLddaBj5BjwAfcqeBkz750tYCaxVB3Tqa3Tkwt_92leGh0eXy5IM_lJlpOYwX-a-q625r8ErFIWAfWMYd-ldqgmJk435SewVy9u141S2MCNoPwuXA5miRnE6KbaSQJDe0YQxe6AFnRNC2LlJ3BmyMXWToxfQfganNbfHa_vAKAQ_xX6j-1JvCi5iOz0rT93MUpA8lmWrAf6c_my1D44-Lu8_eN25iC9m_Fh0Pf_Z8tBxtkWfhLt4EzobQr9HUlRPcqm1DEHG8P_eqP6XM-2HvBGbRby0UbXv1K3rvybavKZqB1NDfFGx0dcAs9dfKxzNKZHxx1zeVHYhrXLGZXEOg_1Nmx-Ka9fjcE5rE84e9KPdvUwvKcUHIMufP9RZKpfgPx-qj6BL9vo3D5NjOcSD2ZGsC2hIibSrz14NKXeq98nsbEofNR-qihNqKhLTI8IMbIOEK-UXeJ5ts5iqeuZ_Lrii_uBUUGYjgwVRkwPJyjNPFQfbvhR7Gh5fx1L3LLHGfZJ4_SPtcJpc64LwPi8_ygpOCZuz-oneHYSs1TIE3mPnQedKD7quZ6kntw9yiQ=w1754-h1338"
                width="48"
              />
            </div>
            <q-item-section class="text-h6"> ボイス販売所 </q-item-section>
          </q-item>
          <!--スマブラ切り抜き-->
          <q-item clickable v-ripple @click="router.replace('/ssbu')">
            <div class="menu-icon-image">
              <img
                src="https://pbs.twimg.com/profile_images/971877109139255296/Q13jcE4h_400x400.jpg"
                width="48"
              />
            </div>
            <q-item-section class="text-h6"> スマブラ切り抜き </q-item-section>
          </q-item>
          <!--オム子レイディオ-->
          <q-item clickable v-ripple @click="router.replace('/radio')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDyhzypVQRdSjMvIc2sHDfyehMn-b6gPMvhF06yNE0LWfAzyL4VX1bbB-vZA_coRbW5_oe_E-wrEtMA_78kwte9PQNkWk37jGK4p7HaxU6uHrJLyBoDkDBfbC6j2Iz5vSf6HGSm5XBfB17IgsbOcfYNFqVAxFqEJAUIWZvm1EsqDUNXPuRcwKUhgKt56A_C_52_m8cFBfv2Z_cTh3V9aryhSO2tUiA-AajDFaY3ajVPs64_cvHeE8QsbOoXV0qSggxGpq4n3Nqpd3PLfgCImXBuHhLrEkZ00Qf0W0RbtoiIO4gLQbAEkRTEBZqSNdk9c0O_SQgqhTB616DdoQb_fbGhQg2P8gFgSKyjELUCp9ie_ZYiQW3lVJP6oc8hxP4Z_-tjnGNaowRRswXFAu0H-fFI9b3HameWNncfOCYj7ERRn_GwqpwbVILvNhV2jFnqQq13ymc_wA3o16XyDtZnO4UmStQjJl3jrDoHEkL5D5oWaswf9pkvRU17mJ5We83Wvt-2d71sFEx-J8VQavYOdhszi4zyjP8BeDAAz4xywKtJEyw_hiNh2eLUNhhXxmBC9vYBWe6N8_UfqKXB0aH1oe0G0LnVwP0uQ_AipcGuUx4ajce-nA_KALV27SY5u6t1LLtwieyoPnPS7a2Io6Y3FL9zB03ATYGTzgWvvj0bUiydeLJUlak-1nlpxBnKqNazxFENPo9VW5rpQEB-dua-nywaBTBHX02KcfbDrRXjajt7_0DHn3E0C0f8ff_usY6HRqv36xTcd4W4WqVuxOuQ9kTS_A4gniGxeOU7awfYuwrbi4ayb_CN_Zawucs-AxlDi4PfGIW5E9Fb_r3EmNviuSQLPS_7HWTK7SKRFCnkfWXvwPoghpDzgLsy9FptBQElRIdXX9UJRNCqNGyrHRotX68L6KB5Ixo-GMshiFZLGnBpi8awLPXYLgKkdDUqnSYo4zd_Dsb3gLEGmy-zcQb4uhm0FuwlQapyCr6KuxJTKo75D2R4KXo6NI6wPUvESEuAbQLjV8ncTXhWitsbBmt6yeLwBfKcvPrN84SQ9V4b7CEdujlPKe-FCTqWbhg8jcy81z8dcBczcZmlQqtqUkA9kiP-A-uD1KzsPJFL3mLHBvXCJRyRZxshQKYq_--5W5Vs9rYeYMyKVlaOnnAJYlqpVqXkcqeNBTk-VJQJLEQZofbiPbR_-iYp4wnGBjspO8QVXuHQAWjNcyWRp60uw6mgSmnpeu4r0uHe7vUWKYGLpAdImDww974MiPXUUpqWoKP6GRoY5zo8gLhnb9BT6ethA38s1Px3hZIwxYwCHcARenNE8J_zbkXc2jN-0_wG0J1fYq_V3QG6GHy8mvYMKDhadC1_2dTJ1sP-_zrplohx7zeoQ6kUxxWKmZdHK2vZ44l7KYjg_Fl-crcfFZkNg577AwVCL-UoI1Ni__l7LzG773KrI8kIaOOqFfNY3yL-0J16AHSJnavvZd7VTGAPasYUKMVaI7Ou6z_0kZcTLKY6gTD8p5H7gXjyp_OfANQ=w1754-h1338"
                width="48"
              />
            </div>
            <q-item-section class="text-h6"> オム子レイディオ </q-item-section>
          </q-item>
          <!--画像一覧-->
          <q-item clickable v-ripple @click="router.replace('/img')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDwx5rV0DBrA64ZL9v4F7bkFdYJzyJA50Hoo1pgRXNP7T9Loye1r4-_makgXNRnrqqG926m-_IsQsNazZFUA3nHusZApJXJxUOb3vR0g772eoKHYHtjYKwPfDkqq4L-wzRFqiLJFKdzlMK70U9c9fQM-0lBHwftd0AydRgR4f4HofITGg0z_27YB8DZi8L34sXDwla3_Jt4-UAqGibBqiPhn7f-0iCiq2FYHiKx1zclFuTLMcO-110bLqpR88jA_B2Os-vZBL3C2CtVi8qRz4-khY73eWSYYIrHSrZVNI82pXRonhMVFLrWJYRmuwwcwtWA72RoOcgFE-Dfv_GSVs-GVT30UR3O512PDkm2jEX0k_-mIGgYX7HGdqznDpfsOQ1NYuzq8BJ7Zwo4_7tn8rg9Qhrr5xxNGek3BTk1JC3Tbxp4xTZSromwzcVchXOzMbFEtbNI9VYPmkRfvd3Qn7WV1-UJ8LJkpaYiW0AYsVxnE5XaMxDG1BYF4gUiMJAag2iBao1inwrV6oLcBaDvQ4DDfl_2ADn-wmPigoHyqn3uCaLozhOWxM8rygALaTAHq7boj0MSOMld0_2gxJWkF9MIyDFJmjTF5Eh4CgNhWIYCcIo3VW1N4BeUPn6lJx9bOVKPW_rDO7s3kZ9bpL93mr0gxaD5-ZGUfo94N4lmIEcCNvaSY0sVjzlL63vDYgA7pK1U_Np5ZWyYivqUqwBG1RPl4Va2YkOT3BsJGFQ8evGsZKr657BaHI6rwRegLiNcPzhhX_aB8bCx6McJIAFrvdP2quffnbJDEAGWKuvARZ8lTNIAUerXWAOEdOhtp1xJsDSpmsiNywCv5c6-o5jN6znxyBIetTx9HgZQ4x6UUd-xvZ7oncuw-cQk7MZAzxGCGCN9RvQjwBRzhvXrOd8f_w_eu3FF8fIuGiFoUkB4q28NpuDWA-Git4s4s3Poyc9bbpOoaYaR2dsihtCYURC7B_yvyaSPDocuAhx5m-jm11lIo2BxOzx9jyg3Gbi95ePUYciV0Iv3qkpUktJPfaV_389oLmkjdSXNYGiHEW3fqRH5qPmv6D9q1w-3jYWxHHr646bfYfa6CxthbigQZotNpuwPvaTY1NXpvtuy1B-eHM1eoaxrSRWDrvRNKav2_0x3td0lxR-bVPxZECdvjy7rV8NxFm_uhXD8E0x3KlvXDLot1XmFynErGZgib3eYiftmiyBOv5VTI5uuoJX90u-q40aeGnbJvyExQQKe5jLZOia5wZvVr4tUIIS3yi_rvwdL7kkRKS0IVOZ34XErRhV2EY98cP1tXN4Qh1n4PjUwLNbFw6SB6Jx_yThYtfmXnIkzmtemFPoOimjtXZ9jAEkLxlGdS7Ro1WJGzgA9IlBvbut8LblKcMDvMXkjXFHBlt1w9PwsEA8a8RYX5e156gz7QLdWchUDw04R3KiWqXjSeMpXO3eS0KxVc9wo77COS35wyArLy3wgRO3-o0hxiceXhttlmj5F2aW2GZGcD0VwlaeTRsAfIoUKcgUv-SQ=w1754-h1338"
                width="48"
              />
            </div>
            <q-item-section class="text-h6"> 画像まとめ </q-item-section>
          </q-item>
        </q-item-section>

        <q-separator />
        <q-item-section>
          <div class="text-h6">Scraper</div>
          <!--Twitter-->
          <q-item clickable v-ripple @click="router.replace('/twitter')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDxZTBOLrhESJSHfghmh6mqKDJAKq9p-ZQro1i9CnSRa8IElMH3CLr4DbW6tAKsJZwE7kmFCzEZnvrprml_kAh8cBibgSbKdx1ChD-e2uSO9jLGy1-LACESqYGKsl0WZXmLEBtnXhQ60fWR0emqRJRM0jLi16FhxQ8C8JjDXmMGthsJ3tIkVtsFTzzwMHp_A1lGtjv1k3iTCMyOKLG6yrM88pcD65dac5yhtNZRTK_41PBu6_9F7a0NzH_l7OxevlRmAHre8ZDH4-k5vXgfwJRbMoFYtJUNmmXgn9GnqYyVVEwO0C2g2OHWEsKCr3BC4zUJaN0sEFcPwUd3AWB9ndg6qhazfw-PddQ2CMF0l8YnZjyygz42ZJJvS5JuUVMOfRbmMoiIR99bEKqFlAZxfKAwsuDbsePR0Ico82rseFPEne0gxYoeu3rieMyCh3SQ_4aGXfHlRiz2-0dgwODHujgZ8aHY1R9ooLhYt1HHp_vPY-zgTEkMC8WF0T5KepLxqrZ7I_wC3JePV-MsZqSszwJSvdTNYhy-zfpwIs4kEfOK8H5SlfvnqlPS-3ARZhn-HxCyTPpE-EUZ-S8t0Ky9ymkFyPGd8T2bihCDs97W8GVlc_dl9xkvIv7he4VRdL7hV3CgfkykMme4yxVPNHyaHbzI0p9gSzO6_VroMxHKHf2dSsY4eck-J0lqpKJ0WA1F1tHjWn_56eO6U0lWbwooIONIO0s5L28-ABrqz1muORDwaeGHNIKdr7RqhHEQazVSIwDYg6sb-Sir6GMaXQcPSTw_WA-AWRjDE4s5EZDNE9eIgLAvDKo8PtbT9oMJH6gKpv2_zi1u9Gu5_CHta4KHuUXkLOQr1IRM_PBaAeiBG2GK6J9bPFanKDk_MXOmIuERjiVDf-PagWaF1YKbiQrygwSnCb1UZvB9CP5e22XO_skNPwYbY9wgQ0Hg3oSIz_0V3yMQi2-iRNtVyP9BeNI4Km5-eNcM6_waiIhD-Os5Tmgo19mQe54H_AqCpHaUapSDbgQ-3ggqLmH4TLxRzeFKjvzx5YJzSlKQ5Mx4z9qWWBmberqC8fLcPCZ5W0pXg0X_GJxhu13I1f9mWi1R62vfbYaNd8iT0oj8ggrwTMfn48mPLrhH4TqQVJ3cVEad2OZQPAPY1xykfMylVk-M69NBClKbSn3kz1O1cheabxCtNKNFNLWiCmBFPDq4fAuDsFBe3QEOjar-LDfz1idGy9hh1PQeaBuK3hqu4E5Ml4Ac0o-Pl9-2W5-EEYPhXxXjiSTvmpe5beQSHvoorQXmn8LL4roRO8dC9fTfhidOq_q1_XtMbylgiac33mPfaXCbXJAOgjTQyTJw0LC_3xefBQYBhpy4cOKCL5_lxiwRLOt9AR5FVNqzl6iZabDgQXnd61zS5zevKHlGZBhzAttXW36dZDOGOdLD7H90ZkFmCOKL-nQYQdmD1fvAzjC4zA4PgXDaKjYRI4RzW38e-Qv83fQ148fP2PjSXWlsoZXrWytrOWeFLqfe1RYUbLOnfkw=w1754-h1338"
                width="48"
              />
            </div>

            <q-item-section class="text-h6"> twitter </q-item-section>
          </q-item>
          <!--youtube-->
          <q-item clickable v-ripple @click="router.replace('/holosong')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDwpRvmYILVc3cWqsq9lwvUKE6U4N8cR2Q_WWNZ5ZK62_zcIZzmMDddN8cAI8ffQE8p0muh-qUVWRm_Disq1TlxtUJd_OraMsyneb-ZzNc5Ho_KkvX1z-EeQitABe7bJAinxdt9HvXnXxN6q8TEeaNTYLtohKT2pzSQmV22uyyRjlpvw6q6AjN_ma6DXpxVjWtZ-i6myTMuMGcXy4Tu4RkrM-WfLFJXxLaaeTLrdJkz62sr7RfZv85WcKwc4-rTGErToAA0eHGTOc3Koo3jbz0Q1GvfPDTKJFF0Ykf1yy217cy5DT2Y3pTMinCPEr00OqhsRPK45t6lYltBb08bUnb7Lx8Mp6m3TzoT9kKY4Cx79nM6UpWvSlgRP-VQeAzpy6jtllIZUkNRTRcgGAr_ISffuYsvbBjPFmPTSuQhl9RIoOFnP2clBGOU2vHqghZNIGp-TYzKwlsK7XoWmTed0fBXTKg52T0UepFsI7WXcfM0yQOLhQ2dRN9zJeMuGJF4hDWjpIOSJrRnkHwM1TMi0eAQ3Gf3hRVLQlzNjv_S0wGVSJ2UzQzhmpImsftvYXJfHYbWD-YaLxaseDXI36a8mXbXrJWd_4Hs4uBgXy8GR0085kur0k5UjWIWMYOQLp913y9tBBKxoZ2Q2F6m3ae_W0TmOqJPh9SM9KcfRz-6mjyCV9fVGl0G59IOuj_q8k4uU9Powj1LPXVgCSZwsNFUmaECXlRav3umMmzzt3OoOhv4zH_IDdWm7BakRDKMnJtgY3ISv2xPHw5DZY3LPKasC9LdWqlFHynXq8h9ET1_HdObDbgSJmvAzpFB3k8GvCrgTEZjbXExRz9LII9l8yHxlg_blffAlKxfM4qBI1aGpxclWcSj11-yLt4zLR0Qt3OCVbcoLa_vrGZAGI9UGVIFSqJTJ0NYc5OrgY4K-aKEUxuQQBEvWj9mjDGqeIFifi_NqMSEUHKifxAgEsZ4GpBbpbJnqupCi007A4Lti1WoncdTKtgvFo5SIKabD0Wjvq0-4QIvMu3lgJ7C2jriAvh-foJm_VcgVis3ud7aJhJHjDSmvqQ58Wzlqv9G6jAG8pZ_vEFKHJnohUMmymSTMFAk6iER_17UWmc1JZS13hz8kF1asM8daCnCm-xRZKavMU4hxpBmKfOfnfj3sWZc72qk3sXHB1BFPKe7_OqpV30vbioqrtT_hCt_2YcaiQXikmz3N_p8h1wbRrKtNef7VT_bSHOL7oRX1aso63qgZgRKYiFEvqKVUVY1hb2-omKDgruBJKMEk9MFVw4naTxu9CQzb5lpjm0u3oDb4WaJ5nO53rl8xRpNuTRUgdL-3h0MqA8wIc17In326JGD4pyZsGoEFfFWi9Uj90yTeQXFBsQzh0GyEYyEo3HNerF5y8KibYjEiShUUF9-mUwxrT7SP_PlIcYlseJiBjibIUPu3fcfWS0Sc0cgGuQ-z1XCVQ8XcpMTjsxcjFpb5V7ln_K3wVQui8etE-L2Ph8kz00Fq8apWfJvqGaU_vfaDAh_6eQ=w1754-h1338"
                width="48"
              />
            </div>

            <q-item-section class="text-h6"> 歌みた </q-item-section>
          </q-item>
          <!--album-->
          <q-item clickable v-ripple @click="router.replace('/holoalbum')">
            <div class="menu-icon-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Hololive_triangles_logo.svg/1200px-Hololive_triangles_logo.svg.png"
                height="48"
              />
            </div>

            <q-item-section class="text-h6"> オリ曲 </q-item-section>
          </q-item>
        </q-item-section>

        <q-separator />

        <q-item-section>
          <div class="text-h6">Other</div>
          <!--共有URLまとめ-->
          <q-item clickable v-ripple @click="router.replace('/info')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDxNNdTfsKTBekEVIX6SVie4_eVxqjtiPFoGpNzaDwKS28T1u_ll-SSQilco7eDwIuT281_pGeyRy7eecsHIZ0gI4nx8Osx4o8CPeLYWL7nVz2xBLBADM15GglWEy9W9b8IVup5TaJAnW3nZNcnCs8XrknPytidu-Zr9sCPh_iDqq5VSlHIrGQ_z6xfeeFUx6_qEBL-L9ky2BodLTcMYwUtHU6LYb3FVUbvapKX0_CUbdu7e00-YyNLZKT9KnpbCC5DHgmCiES2Whzc2yh2NQOgRhyjBznq8YNlgEml3oBv4dL2VLb57t5ktXMUBlvM7sMMvGPG3xVM2uCSpOLrVDdCVJUk6cxAkUmY8qszuXAqSpCkXBgKRplS__l0FCR3tH_75GmIA4UT0-oWXYhb9t6UlJvLDnQlKJvsSBqfZ9cMROrKxtxrYQJoPSmrnDgJJe-S7PxqwLXyri_481p260w9xNEbfxJ5AqcESK86TRmlcT811haCtKbJdgIHJvMpYRDqGkZO01sUIF-5RAyvZWblOCtevwOhphEiRIpPC2XWLYEp3iqwqlyZQFLEUk_Acuc2GbP5i82EXlh9KXRGGBKFI1n5NHGU0e53KCOqB41Do02nHh6PsbcnrATFCyTBLogVRSllahOSHy8ORXt7ihEreuWH_Sb4E9q6BQZ_jlevjWtxV8LUIJI_J3CsCOihn1GDQhPswZrGVBWm58GxZmbfg-RJIevJgqfizvDWqURuN4jks4s__U1zjL0uAdLVooP7ArwG-9x_6lME4yYmTYtkk8fHG-u0KM0CaLRD690jrhrJAS9nRzpdKm8vKXecXjrWpUAXbsiFr34kJwC-kpZYA-Zj1rHFB1hvC7nFgtxAhFJ0raG1O_ndFnSx2N1g8ZajaKcySRfx_yU-kiJia9bkrk1NBHLaDZBqKP9d1sbgKBnZyaoeseivqrhq9m0gRn2F3vW5n7vzL03Kp17OUZCgY16jw4NINO2DVGw43BekGo4kst3L04Zf7-5cqSm4R0LHn7EdZpK7vxtEhUuSmQsAgF1KHpQJHn6feBExE1QYNu675uVsPCfoNG95dKLKdlQjF-VuUevDD4X6VITuBP_7RulrV990uhAn6--3pG9DK8eIB604ZHBCJYKIs0MJkEx26Zw9mKvcskJ2lV4Ocw62BQj6XfiEYsBpvGO4XoJa9EYJSqrZQG8GX3hHl9DAkWPuhY37HEOedwrsOPxxtuoPGqoKjoLiSWEOcZtX_RN8vw7KJlgJKdZBa-80bsiGduyCLibec9epWvb096s4p0C-kS7A6DmXK-KNrD7AjkBwmCjs_lgpDMGSqkE9zLP6pONkMYv-X7-7uuNfPkHr89BL9c7icQvToFTB46OBhRVlQeDUZc0WLWF3xGr-4llmsNIVybVh3vBFRhAbaBWrfRcNlduvnszdshjNwZ6gQ2oN5pY5yK6MYERcSG2D_8KZhLvWkMyPlMd2G9-B-F35Xxgi1sEJTctry6MQFMwdZqFVnE2xj6qkUvYNQeg=w1754-h1338"
                width="48"
              />
            </div>
            <q-item-section class="text-h6"> お茶の間 </q-item-section>
          </q-item>

          <!--ホーム-->
          <q-item clickable v-ripple @click="router.replace('/')">
            <div class="menu-icon-image">
              <img
                src="https://lh3.googleusercontent.com/fife/AK0iWDwcxEY8dZH104QC7e-I05rx0H40GGzDH_NqQ1ORMuws8mgL4kVU8Wv-0wD6RIDnkfCmnmfj4CHA8A8Xtc1XtClEa-rpZsm5UrCdiqN1hkIKX3LNeyVjwuCBWZY8ZkLjaTBPqTbj9xVNxn4hhzvKUN9MgblpoUqE_Ecw6zW8roPoWRzaNwtwckEl2Pr7-fjzu08X3Lkwv762tCbhIwX_4dnUqMQYFbmMDYVPF91K-ri2cW19DBJc-sPWQYl9DVZVMTFdGME2GHIFVF40wORWYHx62Rp06OhHsKjPaDjAI9bDdUp3YjV9lTJF6itxYznGLzs5EmyhEa2F3xLF1p-b1vR9HLPp0tHJcrd_UsKTUTsI84iFivjGSvHp7ncLgefDSlgyFYuMyzy_N00PkCnY1fwgqMj75-TwK03uTcIQfjsA1MGmPEkKSux1s9FnJbJMKWdoGN7BVIppJq50tNdU5TYnvkO4yD15pVb5AICcWLLbKW2I85WVxRvoj-9inqi-yeekcXRaZjtKLrb5StfAZOOGYGcn-x1SEUkqik7f03JNVKRjdidIKDwFa-tWar_6pA_cUyOgMqCMjXY6shjhJUR5MI9hB1LOB2MV_NTKJld3w2cgSFOddyuXO0DsyJ6VqJDNBbTurBdSiw_cexrKn7hQeXm9kTSH9CIaLss6BvnLGKJCuUYBDMYOGwlzVdTjVvEfE3TVts1asS3w7I7Jzt3G0KrN1VjyajpwtHNmStL97Aoi7YZCBirT2G0lED9_VBFMP5PG-2lwLMbtImqPMh-Bkj8mvgkYMc-mcqEEJrYAbAgKFa9de3j5QuvX6tdtU9ivVhGbBbDQyzJ9hG-ElPF4yaRuzul11Lf2Q-2I_PXzblR7IycB6PD9M6LLURUcsCOownQDLbR9liVTzXOvO7VCyijJknUQcuojXp9c2OgyknZWrWH409w8E4zdJbdkC7MC_VlLQtU4dAZNTcClWd5UstlEAXWEBCHy-MU0Z_OWXrupq_iVhsiiav6dZlKhbeSqlMmnRsXEWlBrF58Ajfnn-z2odjTiLkOyFj-rEpxuxlxTrpVZmQQdCLQBR4TznVKje0kSrTvir7wdYWNkag0a4BRcyRnte2rAyIZaFT2iFX3KUlkIFHQnVdmFsIWKXpfCX9UqTjpalYynOuuu2ANjFA-_VDXghooZKkTzKoMDn1tcmcCT-sfNXnfAJry2UvOLby2lRHqpTraSdEMQqXIkPW7N1UvtGPG9MjpBmJaomdKfoLOs3fMrmiBq2xZ0g-d5K5vE3MnyR9wP8XR7henhWJ78GaeP3QiqSnSBQzhIlEFdzXIJNsY1OS33349dijSJAZOmkJtvpNMJpXv3U3GYrxnFKxUdVtq7aBeuHSELbmJ588tuIzZpRwaVT-UyGLVqoRlzgggpQUMzh5hbj9QZJK53e9N1G3SuPqY06OibjEgIyru_0_sDqKqMfZLfAOZIgDlyDmiVVNhg11YVldysXk_QzoAnZcQZS8VNKS1IXRxjSJPWwjPe7w=w1754-h1338"
                width="48"
                style="
                  border-radius: 50%; /* 角丸半径を50%にする(=円形にする) */
                  border: 1px solid #b4b4b4; /* 枠線を付加 */
                "
              />
            </div>
            <q-item-section class="text-h6"> リビングに戻る </q-item-section>
          </q-item>
        </q-item-section>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view class="q-pa-md" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { time } from 'console';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      router,
    };
  },
});
</script>
<style>
.menu-icon-image {
  width: 52px;
}
</style>
