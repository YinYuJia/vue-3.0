<template>
  <div id="demo">
    <div style="height:4rem;font-size:1.8rem;">
      <el-row>
        <el-col :span="16">舜江名苑G001</el-col>
        <el-col :span="8" style="text-align:right;">
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
        </el-col>
      </el-row>
    </div>

    <div style="display:flex;" >
      <div id="wangtab" style="width:70%;position: relative;border-top:1px solid #000;">
        <el-row v-for="(n, index) in zb" :key="'ge'+index" >
          <el-col :span="4" >
            <el-row>
              <el-col @click.native="getdiv(index, 1)" style="border-left:0;" :span="3">
                <div v-show="`${index+1},1`==n.zuoBiao1">
                  <img v-if="`${index+1},1`==n.imgShow1" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 2)" :span="3">
                <div v-show="`${index+1},2`==n.zuoBiao2">
                  <img v-if="`${index+1},2`==n.imgShow2" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 3)" :span="3">
                <div v-show="`${index+1},3`==n.zuoBiao3">
                  <img v-if="`${index+1},3`==n.imgShow3" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 4)" :span="3">
                <div v-show="`${index+1},4`==n.zuoBiao4">
                  <img v-if="`${index+1},4`==n.imgShow4" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 5)" :span="3">
                <div v-show="`${index+1},5`==n.zuoBiao5">
                  <img v-if="`${index+1},5`==n.imgShow5" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 6)" :span="3">
                <div v-show="`${index+1},6`==n.zuoBiao6">
                  <img v-if="`${index+1},6`==n.imgShow6" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 7)" :span="3">
                <div v-show="`${index+1},7`==n.zuoBiao7">
                  <img v-if="`${index+1},7`==n.imgShow7" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 8)" :span="3">
                <div v-show="`${index+1},8`==n.zuoBiao8">
                  <img v-if="`${index+1},8`==n.imgShow8" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-col @click.native="getdiv(index, 9)" style="border-left:0;" :span="3">
                <div v-show="`${index+1},9`==n.zuoBiao9">
                  <img v-if="`${index+1},9`==n.imgShow9" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 10)" :span="3">
                <div v-show="`${index+1},10`==n.zuoBiao10">
                  <img v-if="`${index+1},10`==n.imgShow10" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 11)" :span="3">
                <div v-show="`${index+1},11`==n.zuoBiao11">
                  <img v-if="`${index+1},11`==n.imgShow11" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 12)" :span="3">
                <div v-show="`${index+1},12`==n.zuoBiao12">
                  <img v-if="`${index+1},12`==n.imgShow12" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 13)" :span="3">
                <div v-show="`${index+1},13`==n.zuoBiao13">
                  <img v-if="`${index+1},13`==n.imgShow13" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 14)" :span="3">
                <div v-show="`${index+1},14`==n.zuoBiao14">
                  <img v-if="`${index+1},14`==n.imgShow14" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 15)" :span="3">
                <div v-show="`${index+1},15`==n.zuoBiao15">
                  <img v-if="`${index+1},15`==n.imgShow15" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 16)" :span="3">
                <div v-show="`${index+1},16`==n.zuoBiao16">
                  <img v-if="`${index+1},16`==n.imgShow16" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-col @click.native="getdiv(index, 17)" style="border-left:0;" :span="3">
                <div v-show="`${index+1},17`==n.zuoBiao17">
                  <img v-if="`${index+1},17`==n.imgShow17" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 18)" :span="3">
                <div v-show="`${index+1},18`==n.zuoBiao18">
                  <img v-if="`${index+1},18`==n.imgShow18" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 19)" :span="3">
                <div v-show="`${index+1},19`==n.zuoBiao19">
                  <img v-if="`${index+1},19`==n.imgShow19" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 20)" :span="3">
                <div v-show="`${index+1},20`==n.zuoBiao20">
                  <img v-if="`${index+1},20`==n.imgShow20" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 21)" :span="3">
                <div v-show="`${index+1},21`==n.zuoBiao21">
                  <img v-if="`${index+1},21`==n.imgShow21" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 22)" :span="3">
                <div v-show="`${index+1},22`==n.zuoBiao22">
                  <img v-if="`${index+1},22`==n.imgShow22" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 23)" :span="3">
                <div v-show="`${index+1},23`==n.zuoBiao23">
                  <img v-if="`${index+1},23`==n.imgShow23" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 24)" :span="3">
                <div v-show="`${index+1},24`==n.zuoBiao24">
                  <img v-if="`${index+1},24`==n.imgShow24" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-col @click.native="getdiv(index, 25)" style="border-left:0;" :span="3">
                <div v-show="`${index+1},25`==n.zuoBiao25">
                  <img v-if="`${index+1},25`==n.imgShow25" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 26)" :span="3">
                <div v-show="`${index+1},26`==n.zuoBiao26">
                  <img v-if="`${index+1},26`==n.imgShow26" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 27)" :span="3">
                <div v-show="`${index+1},27`==n.zuoBiao27">
                  <img v-if="`${index+1},27`==n.imgShow27" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 28)" :span="3">
                <div v-show="`${index+1},28`==n.zuoBiao28">
                  <img v-if="`${index+1},28`==n.imgShow28" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 29)" :span="3">
                <div v-show="`${index+1},29`==n.zuoBiao29">
                  <img v-if="`${index+1},29`==n.imgShow29" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 30)" :span="3">
                <div v-show="`${index+1},30`==n.zuoBiao30">
                  <img v-if="`${index+1},30`==n.imgShow30" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 31)" :span="3">
                <div v-show="`${index+1},31`==n.zuoBiao31">
                  <img v-if="`${index+1},31`==n.imgShow31" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 32)" :span="3">
                <div v-show="`${index+1},32`==n.zuoBiao32">
                  <img v-if="`${index+1},32`==n.imgShow32" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-col @click.native="getdiv(index, 33)" style="border-left:0;" :span="3">
                <div v-show="`${index+1},33`==n.zuoBiao33">
                  <img v-if="`${index+1},33`==n.imgShow33" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 34)" :span="3">
                <div v-show="`${index+1},34`==n.zuoBiao34">
                  <img v-if="`${index+1},34`==n.imgShow34" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 35)" :span="3">
                <div v-show="`${index+1},35`==n.zuoBiao35">
                  <img v-if="`${index+1},35`==n.imgShow35" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 36)" :span="3">
                <div v-show="`${index+1},36`==n.zuoBiao36">
                  <img v-if="`${index+1},36`==n.imgShow36" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 37)" :span="3">
                <div v-show="`${index+1},37`==n.zuoBiao37">
                  <img v-if="`${index+1},37`==n.imgShow37" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 38)" :span="3">
                <div v-show="`${index+1},38`==n.zuoBiao38">
                  <img v-if="`${index+1},38`==n.imgShow38" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 39)" :span="3">
                <div v-show="`${index+1},39`==n.zuoBiao39">
                  <img v-if="`${index+1},39`==n.imgShow39" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 40)" :span="3">
                <div v-show="`${index+1},40`==n.zuoBiao40">
                  <img v-if="`${index+1},40`==n.imgShow40" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-col @click.native="getdiv(index, 41)" style="border-left:0;" :span="3">
                <div v-show="`${index+1},41`==n.zuoBiao41">
                  <img v-if="`${index+1},41`==n.imgShow41" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 42)" :span="3">
                <div v-show="`${index+1},42`==n.zuoBiao42">
                  <img v-if="`${index+1},42`==n.imgShow42" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 43)" :span="3">
                <div v-show="`${index+1},43`==n.zuoBiao43">
                  <img v-if="`${index+1},43`==n.imgShow43" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 44)" :span="3">
                <div v-show="`${index+1},44`==n.zuoBiao44">
                  <img v-if="`${index+1},44`==n.imgShow44" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 45)" :span="3">
                <div v-show="`${index+1},45`==n.zuoBiao45">
                  <img v-if="`${index+1},45`==n.imgShow45" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 46)" :span="3">
                <div v-show="`${index+1},46`==n.zuoBiao46">
                  <img v-if="`${index+1},46`==n.imgShow46" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 47)" :span="3">
                <div v-show="`${index+1},47`==n.zuoBiao47">
                  <img v-if="`${index+1},47`==n.imgShow47" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col @click.native="getdiv(index, 48)" :span="3">
                <div v-show="`${index+1},48`==n.zuoBiao48">
                  <img v-if="`${index+1},48`==n.imgShow48" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>

        <div class="mianban1">
          <el-row v-for="(m, index) in mianban1" :key="'sm'+index">
            <div v-if="index==0">
              <el-col style="border-bottom:0;border-left:0;border-top:0;" @click.native="getMBdiv('mianban1', index, 1)" :span="3">
                <div v-show="`${index+1},1`==m.zuoBiao1">
                  <img v-if="`${index+1},1`==m.imgShow1" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban1', index, 2)" :span="3">
                <div v-show="`${index+1},2`==m.zuoBiao2">
                  <img v-if="`${index+1},2`==m.imgShow2" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban1', index, 3)" :span="3">
                <div v-show="`${index+1},3`==m.zuoBiao3">
                  <img v-if="`${index+1},3`==m.imgShow3" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban1', index, 4)" :span="3">
                <div v-show="`${index+1},4`==m.zuoBiao4">
                  <img v-if="`${index+1},4`==m.imgShow4" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban1', index, 5)" :span="3">
                <div v-show="`${index+1},5`==m.zuoBiao5">
                  <img v-if="`${index+1},5`==m.imgShow5" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban1', index, 6)" :span="3">
                <div v-show="`${index+1},6`==m.zuoBiao6">
                  <img v-if="`${index+1},6`==m.imgShow6" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban1', index, 7)" :span="3">
                <div v-show="`${index+1},7`==m.zuoBiao7">
                  <img v-if="`${index+1},7`==m.imgShow7" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban1', index, 8)" :span="3">
                <div v-show="`${index+1},8`==m.zuoBiao8">
                  <img v-if="`${index+1},8`==m.imgShow8" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </div>
            <div v-else>
              <el-col style="border-bottom:0;border-left:0;" @click.native="getMBdiv('mianban1', index, 1)" :span="3">
                <div v-show="`${index+1},1`==m.zuoBiao1">
                  <img v-if="`${index+1},1`==m.imgShow1" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban1', index, 2)" :span="3">
                <div v-show="`${index+1},2`==m.zuoBiao2">
                  <img v-if="`${index+1},2`==m.imgShow2" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban1', index, 3)" :span="3">
                <div v-show="`${index+1},3`==m.zuoBiao3">
                  <img v-if="`${index+1},3`==m.imgShow3" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban1', index, 4)" :span="3">
                <div v-show="`${index+1},4`==m.zuoBiao4">
                  <img v-if="`${index+1},4`==m.imgShow4" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban1', index, 5)" :span="3">
                <div v-show="`${index+1},5`==m.zuoBiao5">
                  <img v-if="`${index+1},5`==m.imgShow5" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban1', index, 6)" :span="3">
                <div v-show="`${index+1},6`==m.zuoBiao6">
                  <img v-if="`${index+1},6`==m.imgShow6" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban1', index, 7)" :span="3">
                <div v-show="`${index+1},7`==m.zuoBiao7">
                  <img v-if="`${index+1},7`==m.imgShow7" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban1', index, 8)" :span="3">
                <div v-show="`${index+1},8`==m.zuoBiao8">
                  <img v-if="`${index+1},8`==m.imgShow8" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </div>
          </el-row>
        </div>

        <div class="mianban2">
          <el-row v-for="(m, index) in mianban2" :key="'sm'+index">
            <div v-if="index==0">
              <el-col style="border-bottom:0;border-left:0;border-top:0;" @click.native="getMBdiv('mianban2', index, 1)" :span="3">
                <div v-show="`${index+1},1`==m.zuoBiao1">
                  <img v-if="`${index+1},1`==m.imgShow1" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban2', index, 2)" :span="3">
                <div v-show="`${index+1},2`==m.zuoBiao2">
                  <img v-if="`${index+1},2`==m.imgShow2" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban2', index, 3)" :span="3">
                <div v-show="`${index+1},3`==m.zuoBiao3">
                  <img v-if="`${index+1},3`==m.imgShow3" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban2', index, 4)" :span="3">
                <div v-show="`${index+1},4`==m.zuoBiao4">
                  <img v-if="`${index+1},4`==m.imgShow4" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban2', index, 5)" :span="3">
                <div v-show="`${index+1},5`==m.zuoBiao5">
                  <img v-if="`${index+1},5`==m.imgShow5" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban2', index, 6)" :span="3">
                <div v-show="`${index+1},6`==m.zuoBiao6">
                  <img v-if="`${index+1},6`==m.imgShow6" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban2', index, 7)" :span="3">
                <div v-show="`${index+1},7`==m.zuoBiao7">
                  <img v-if="`${index+1},7`==m.imgShow7" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban2', index, 8)" :span="3">
                <div v-show="`${index+1},8`==m.zuoBiao8">
                  <img v-if="`${index+1},8`==m.imgShow8" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </div>
            <div v-else>
              <el-col style="border-bottom:0;border-left:0;" @click.native="getMBdiv('mianban2', index, 1)" :span="3">
                <div v-show="`${index+1},1`==m.zuoBiao1">
                  <img v-if="`${index+1},1`==m.imgShow1" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban2', index, 2)" :span="3">
                <div v-show="`${index+1},2`==m.zuoBiao2">
                  <img v-if="`${index+1},2`==m.imgShow2" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban2', index, 3)" :span="3">
                <div v-show="`${index+1},3`==m.zuoBiao3">
                  <img v-if="`${index+1},3`==m.imgShow3" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban2', index, 4)" :span="3">
                <div v-show="`${index+1},4`==m.zuoBiao4">
                  <img v-if="`${index+1},4`==m.imgShow4" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban2', index, 5)" :span="3">
                <div v-show="`${index+1},5`==m.zuoBiao5">
                  <img v-if="`${index+1},5`==m.imgShow5" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban2', index, 6)" :span="3">
                <div v-show="`${index+1},6`==m.zuoBiao6">
                  <img v-if="`${index+1},6`==m.imgShow6" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban2', index, 7)" :span="3">
                <div v-show="`${index+1},7`==m.zuoBiao7">
                  <img v-if="`${index+1},7`==m.imgShow7" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban2', index, 8)" :span="3">
                <div v-show="`${index+1},8`==m.zuoBiao8">
                  <img v-if="`${index+1},8`==m.imgShow8" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </div>
          </el-row>
        </div>

        <div class="mianban3">
          <el-row v-for="(m, index) in mianban3" :key="'sm'+index">
            <div v-if="index==0">
              <el-col style="border-bottom:0;border-left:0;border-top:0;" @click.native="getMBdiv('mianban3', index, 1)" :span="3">
                <div v-show="`${index+1},1`==m.zuoBiao1">
                  <img v-if="`${index+1},1`==m.imgShow1" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban3', index, 2)" :span="3">
                <div v-show="`${index+1},2`==m.zuoBiao2">
                  <img v-if="`${index+1},2`==m.imgShow2" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban3', index, 3)" :span="3">
                <div v-show="`${index+1},3`==m.zuoBiao3">
                  <img v-if="`${index+1},3`==m.imgShow3" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban3', index, 4)" :span="3">
                <div v-show="`${index+1},4`==m.zuoBiao4">
                  <img v-if="`${index+1},4`==m.imgShow4" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban3', index, 5)" :span="3">
                <div v-show="`${index+1},5`==m.zuoBiao5">
                  <img v-if="`${index+1},5`==m.imgShow5" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban3', index, 6)" :span="3">
                <div v-show="`${index+1},6`==m.zuoBiao6">
                  <img v-if="`${index+1},6`==m.imgShow6" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban3', index, 7)" :span="3">
                <div v-show="`${index+1},7`==m.zuoBiao7">
                  <img v-if="`${index+1},7`==m.imgShow7" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianban3', index, 8)" :span="3">
                <div v-show="`${index+1},8`==m.zuoBiao8">
                  <img v-if="`${index+1},8`==m.imgShow8" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </div>
            <div v-else>
              <el-col style="border-bottom:0;border-left:0;" @click.native="getMBdiv('mianban3', index, 1)" :span="3">
                <div v-show="`${index+1},1`==m.zuoBiao1">
                  <img v-if="`${index+1},1`==m.imgShow1" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban3', index, 2)" :span="3">
                <div v-show="`${index+1},2`==m.zuoBiao2">
                  <img v-if="`${index+1},2`==m.imgShow2" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban3', index, 3)" :span="3">
                <div v-show="`${index+1},3`==m.zuoBiao3">
                  <img v-if="`${index+1},3`==m.imgShow3" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban3', index, 4)" :span="3">
                <div v-show="`${index+1},4`==m.zuoBiao4">
                  <img v-if="`${index+1},4`==m.imgShow4" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban3', index, 5)" :span="3">
                <div v-show="`${index+1},5`==m.zuoBiao5">
                  <img v-if="`${index+1},5`==m.imgShow5" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban3', index, 6)" :span="3">
                <div v-show="`${index+1},6`==m.zuoBiao6">
                  <img v-if="`${index+1},6`==m.imgShow6" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban3', index, 7)" :span="3">
                <div v-show="`${index+1},7`==m.zuoBiao7">
                  <img v-if="`${index+1},7`==m.imgShow7" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianban3', index, 8)" :span="3">
                <div v-show="`${index+1},8`==m.zuoBiao8">
                  <img v-if="`${index+1},8`==m.imgShow8" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </div>
          </el-row>
        </div>

        <div class="mianbanL">
          <el-row v-for="(m, index) in mianbanL" :key="'sm'+index">
            <div v-if="index==0">
              <el-col style="border-bottom:0;border-left:0;border-top:0;" @click.native="getMBdiv('mianbanL', index, 1)" :span="3">
                <div v-show="`${index+1},1`==m.zuoBiao1">
                  <img v-if="`${index+1},1`==m.imgShow1" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanL', index, 2)" :span="3">
                <div v-show="`${index+1},2`==m.zuoBiao2">
                  <img v-if="`${index+1},2`==m.imgShow2" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanL', index, 3)" :span="3">
                <div v-show="`${index+1},3`==m.zuoBiao3">
                  <img v-if="`${index+1},3`==m.imgShow3" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanL', index, 4)" :span="3">
                <div v-show="`${index+1},4`==m.zuoBiao4">
                  <img v-if="`${index+1},4`==m.imgShow4" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanL', index, 5)" :span="3">
                <div v-show="`${index+1},5`==m.zuoBiao5">
                  <img v-if="`${index+1},5`==m.imgShow5" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanL', index, 6)" :span="3">
                <div v-show="`${index+1},6`==m.zuoBiao6">
                  <img v-if="`${index+1},6`==m.imgShow6" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanL', index, 7)" :span="3">
                <div v-show="`${index+1},7`==m.zuoBiao7">
                  <img v-if="`${index+1},7`==m.imgShow7" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanL', index, 8)" :span="3">
                <div v-show="`${index+1},8`==m.zuoBiao8">
                  <img v-if="`${index+1},8`==m.imgShow8" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </div>
            <div v-else>
              <el-col style="border-bottom:0;border-left:0;" @click.native="getMBdiv('mianbanL', index, 1)" :span="3">
                <div v-show="`${index+1},1`==m.zuoBiao1">
                  <img v-if="`${index+1},1`==m.imgShow1" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanL', index, 2)" :span="3">
                <div v-show="`${index+1},2`==m.zuoBiao2">
                  <img v-if="`${index+1},2`==m.imgShow2" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanL', index, 3)" :span="3">
                <div v-show="`${index+1},3`==m.zuoBiao3">
                  <img v-if="`${index+1},3`==m.imgShow3" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanL', index, 4)" :span="3">
                <div v-show="`${index+1},4`==m.zuoBiao4">
                  <img v-if="`${index+1},4`==m.imgShow4" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanL', index, 5)" :span="3">
                <div v-show="`${index+1},5`==m.zuoBiao5">
                  <img v-if="`${index+1},5`==m.imgShow5" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanL', index, 6)" :span="3">
                <div v-show="`${index+1},6`==m.zuoBiao6">
                  <img v-if="`${index+1},6`==m.imgShow6" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanL', index, 7)" :span="3">
                <div v-show="`${index+1},7`==m.zuoBiao7">
                  <img v-if="`${index+1},7`==m.imgShow7" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanL', index, 8)" :span="3">
                <div v-show="`${index+1},8`==m.zuoBiao8">
                  <img v-if="`${index+1},8`==m.imgShow8" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </div>
          </el-row>
        </div>

        <div class="mianbanR">
          <el-row v-for="(m, index) in mianbanR" :key="'sm'+index">
            <div v-if="index==0">
              <el-col style="border-bottom:0;border-left:0;border-top:0;" @click.native="getMBdiv('mianbanR', index, 1)" :span="3">
                <div v-show="`${index+1},1`==m.zuoBiao1">
                  <img v-if="`${index+1},1`==m.imgShow1" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanR', index, 2)" :span="3">
                <div v-show="`${index+1},2`==m.zuoBiao2">
                  <img v-if="`${index+1},2`==m.imgShow2" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanR', index, 3)" :span="3">
                <div v-show="`${index+1},3`==m.zuoBiao3">
                  <img v-if="`${index+1},3`==m.imgShow3" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanR', index, 4)" :span="3">
                <div v-show="`${index+1},4`==m.zuoBiao4">
                  <img v-if="`${index+1},4`==m.imgShow4" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanR', index, 5)" :span="3">
                <div v-show="`${index+1},5`==m.zuoBiao5">
                  <img v-if="`${index+1},5`==m.imgShow5" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanR', index, 6)" :span="3">
                <div v-show="`${index+1},6`==m.zuoBiao6">
                  <img v-if="`${index+1},6`==m.imgShow6" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanR', index, 7)" :span="3">
                <div v-show="`${index+1},7`==m.zuoBiao7">
                  <img v-if="`${index+1},7`==m.imgShow7" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;border-top:0;" @click.native="getMBdiv('mianbanR', index, 8)" :span="3">
                <div v-show="`${index+1},8`==m.zuoBiao8">
                  <img v-if="`${index+1},8`==m.imgShow8" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
            </div>
            <div v-else>
              <el-col style="border-bottom:0;border-left:0;" @click.native="getMBdiv('mianbanR', index, 1)" :span="3">
                <div v-show="`${index+1},1`==m.zuoBiao1">
                  <img v-if="`${index+1},1`==m.imgShow1" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanR', index, 2)" :span="3">
                <div v-show="`${index+1},2`==m.zuoBiao2">
                  <img v-if="`${index+1},2`==m.imgShow2" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanR', index, 3)" :span="3">
                <div v-show="`${index+1},3`==m.zuoBiao3">
                  <img v-if="`${index+1},3`==m.imgShow3" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanR', index, 4)" :span="3">
                <div v-show="`${index+1},4`==m.zuoBiao4">
                  <img v-if="`${index+1},4`==m.imgShow4" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanR', index, 5)" :span="3">
                <div v-show="`${index+1},5`==m.zuoBiao5">
                  <img v-if="`${index+1},5`==m.imgShow5" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanR', index, 6)" :span="3">
                <div v-show="`${index+1},6`==m.zuoBiao6">
                  <img v-if="`${index+1},6`==m.imgShow6" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanR', index, 7)" :span="3">
                <div v-show="`${index+1},7`==m.zuoBiao7">
                  <img v-if="`${index+1},7`==m.imgShow7" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png">
                </div>
              </el-col>
              <el-col style="border-bottom:0;" @click.native="getMBdiv('mianbanR', index, 8)" :span="3">
                <div v-show="`${index+1},8`==m.zuoBiao8">
                  <img v-if="`${index+1},8`==m.imgShow8" class="my10" src="./img/10.png">
                  <img v-else class="my0" src="./img/0.png" >
                </div>
              </el-col>
            </div>
          </el-row>
        </div>
      </div>
      <div style="width: 30%;border: 1px solid #000;font-size:1.2rem;">
        <el-row class="table-border table-itemHeight">
          井盖属性表
        </el-row>
        <el-row class="table-itemHeight">
          <el-col :span="12" class="table-itemCol">
            数量
          </el-col>
          <el-col :span="12">
            6块方盖井
          </el-col>
        </el-row>
        <el-row class="table-itemHeight">
          <el-col :span="12" class="table-itemCol">
            长/宽/厚（直径/厚）
          </el-col>
          <el-col :span="12">
            2860*500*120
          </el-col>
        </el-row>
        <el-row class="table-itemHeight">
          <el-col :span="12" class="table-itemCol">
            材质
          </el-col>
          <el-col :span="12">
            砼
          </el-col>
        </el-row>
        <el-row class="table-itemHeight">
          <el-col :span="12" class="table-itemCol">
            上顶埋深
          </el-col>
          <el-col :span="12">
            120mm
          </el-col>
        </el-row>
        <el-row class="table-itemHeight"></el-row>
        <el-row class="table-border table-itemHeight">
          <el-input v-model="input" placeholder="请输入公司名称"></el-input>
        </el-row>
        <el-row class="table-itemHeight">
          <el-col :span="12" class="table-itemCol">
            项目名称
          </el-col>
          <el-col :span="12">
            <el-input v-model="input" placeholder="请输入公司名称"></el-input>
          </el-col>
        </el-row>
        <el-row class="table-itemHeight">
          <el-col :span="12" class="table-itemCol">
            项目责任人
          </el-col>
          <el-col :span="12">
            <el-input v-model="input" placeholder="请输入公司名称"></el-input>
          </el-col>
        </el-row>
        <el-row class="table-itemHeight">
          <el-col :span="12" class="table-itemCol">
            电缆井名称
          </el-col>
          <el-col :span="12">
            <el-input v-model="input" placeholder="请输入公司名称"></el-input>
          </el-col>
        </el-row>
        <el-row class="table-itemHeight">
          <el-col :span="12" class="table-itemCol">
            勘测
          </el-col>
          <el-col :span="12">
            <el-input v-model="input" placeholder="请输入公司名称"></el-input>
          </el-col>
        </el-row>
        <el-row class="table-itemHeight">
          <el-col :span="12" class="table-itemCol">
            绘制
          </el-col>
          <el-col :span="12">
            <el-input v-model="input" placeholder="请输入公司名称"></el-input>
          </el-col>
        </el-row>
        <el-row class="table-itemHeight">
          <el-col :span="12" class="table-itemCol">
            校核
          </el-col>
          <el-col :span="12" >
            <el-input v-model="input" placeholder="请输入公司名称"></el-input>
          </el-col>
        </el-row>
        <el-row class="table-itemHeight">
          <el-col :span="12" class="table-itemCol">
            勘测日期
          </el-col>
          <el-col :span="12">
            <el-input v-model="input" placeholder="请输入公司名称"></el-input>
          </el-col>
        </el-row>
        <el-row class="table-itemHeight">
          <el-col :span="12" class="table-itemCol">
            编号
          </el-col>
          <el-col :span="12" >
            <el-input v-model="input" placeholder="请输入公司名称"></el-input>
          </el-col>
        </el-row>
        <el-row class="table-border table-itemHeight" style="border-bottom:0;">

        </el-row>
        <!-- <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
        </el-table> -->
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        input: '',
        imgShow: '',
        zb: [],
        mianban1: [],
        mianban2: [],
        mianban3: [],
        mianbanL: [],
        mianbanR: [],
        zuoBiao: '',
        zuoBiao1:'',
        zuoBiao2: '',
        t: 0,//用途：打圈区分

        tname:''

      }
    },
    created () {
      for (let i=1; i<36; i++) {
        let obj = {}
        for(let j=1; j<49; j++) {
          obj[`zuoBiao${j}`] = ''
          obj[`imgShow${j}`] = ''
        }
        this.zb.push(obj)
      }
      console.log(this.zb)


      for (let o=1; o<11; o++) {
        let obj1 = {}
        for (let k=1; k<9; k++) {
          obj1[`zuoBiao${k}`] = ''
          obj1[`imgShow${k}`] = ''
        }
        let obj2 = {}
        for (let k=1; k<9; k++) {
          obj2[`zuoBiao${k}`] = ''
          obj2[`imgShow${k}`] = ''
        }
        let obj3 = {}
        for (let k=1; k<9; k++) {
          obj3[`zuoBiao${k}`] = ''
          obj3[`imgShow${k}`] = ''
        }
        let objL = {}
        for (let k=1; k<9; k++) {
          objL[`zuoBiao${k}`] = ''
          objL[`imgShow${k}`] = ''
        }
        let objR = {}
        for (let k=1; k<9; k++) {
          objR[`zuoBiao${k}`] = ''
          objR[`imgShow${k}`] = ''
        }
        this.mianban1.push(obj1)
        this.mianban2.push(obj2)
        this.mianban3.push(obj3)
        this.mianbanL.push(objL)
        this.mianbanR.push(objR)
      }
    },
    methods: {
      getdiv (index, num) {
        if (this.zb[index][`zuoBiao${num}`]==='') {
          this.zb[index][`zuoBiao${num}`] = `${index+1},${num}`
          this.zb[index][`imgShow${num}`] = ''
        } else if (this.zb[index][`imgShow${num}`] === '') {
          this.zb[index][`imgShow${num}`] = `${index+1},${num}`
        } else {
          this.zb[index][`zuoBiao${num}`] = ''
        }
      },
      getMBdiv (type, index, num) {
        // if(confirm('')==true){
        //
        // }

        if (type == 'mianban1') {
          if (this.mianban1[index][`zuoBiao${num}`]==='') {
            this.mianban1[index][`zuoBiao${num}`] = `${index+1},${num}`
            this.mianban1[index][`imgShow${num}`] = ''
          } else if (this.mianban1[index][`imgShow${num}`] === '') {
            this.mianban1[index][`imgShow${num}`] = `${index+1},${num}`
          } else {
            this.mianban1[index][`zuoBiao${num}`] = ''
          }
        }
        if (type == 'mianban2') {
          if (this.mianban2[index][`zuoBiao${num}`]==='') {
            this.mianban2[index][`zuoBiao${num}`] = `${index+1},${num}`
            this.mianban2[index][`imgShow${num}`] = ''
          } else if (this.mianban2[index][`imgShow${num}`] === '') {
            this.mianban2[index][`imgShow${num}`] = `${index+1},${num}`
          } else {
            this.mianban2[index][`zuoBiao${num}`] = ''
          }
        }if (type == 'mianban3') {
          if (this.mianban3[index][`zuoBiao${num}`]==='') {
            this.mianban3[index][`zuoBiao${num}`] = `${index+1},${num}`
            this.mianban3[index][`imgShow${num}`] = ''
          } else if (this.mianban3[index][`imgShow${num}`] === '') {
            this.mianban3[index][`imgShow${num}`] = `${index+1},${num}`
          } else {
            this.mianban3[index][`zuoBiao${num}`] = ''
          }
        }
        if (type == 'mianbanL') {
          if (this.mianbanL[index][`zuoBiao${num}`]==='') {
            this.mianbanL[index][`zuoBiao${num}`] = `${index+1},${num}`
            this.mianbanL[index][`imgShow${num}`] = ''
          } else if (this.mianbanL[index][`imgShow${num}`] === '') {
            this.mianbanL[index][`imgShow${num}`] = `${index+1},${num}`
          } else {
            this.mianbanL[index][`zuoBiao${num}`] = ''
          }
        }
        if (type == 'mianbanR') {
          if (this.mianbanR[index][`zuoBiao${num}`]==='') {
            this.mianbanR[index][`zuoBiao${num}`] = `${index+1},${num}`
            this.mianbanR[index][`imgShow${num}`] = ''
          } else if (this.mianbanR[index][`imgShow${num}`] === '') {
            this.mianbanR[index][`imgShow${num}`] = `${index+1},${num}`
          } else {
            this.mianbanR[index][`zuoBiao${num}`] = ''
          }
        }

      }
    }
  }
</script>>
<style >
  #demo {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 1rem 2rem 2rem;
  }
  #wangtab .el-col {
    height: 2rem;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
  }
  #demo .mianban1 {
    position:absolute;
    top: 5%;
    left: 41.3%;
    background-color: #fff;
    width:15%;
    border: 4px solid red;
  }
  #demo .mianban1 .el-col, #demo .mianban2 .el-col, #demo .mianban3 .el-col, #demo .mianbanL .el-col, #demo .mianbanR .el-col {
    height: 1.8rem;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
  }

  #demo .mianban2 {
    position:absolute;
    top: 36.4%;
    left: 41.3%;
    background-color: #fff;
    width:15%;
    border: 4px solid green;
  }

  #demo .mianban3 {
    position:absolute;
    top: 68.1%;
    left: 41.3%;
    background-color: #fff;
    width: 15%;
    border: 4px solid red;
  }

  #demo .mianbanL {
    position:absolute;
    top: 36.4%;
    left: 22.8%;
    background-color: #fff;
    width:15%;
    border: 4px solid red;
  }

  #demo .mianbanR {
    position:absolute;
    top: 36.4%;
    left: 60.3%;
    background-color: #fff;
    width:15%;
    border: 4px solid red;
  }

  #demo .el-input__inner {
    border: 0 !important;
    text-align: center;
  }

  #demo .table-border {
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  #demo .table-itemHeight {
    height:3rem;
    border-left: 0;
    border-bottom: 1px solid #000;
    line-height: 3rem;
    text-align: center;
  }

  #demo .table-itemCol {
    border-right: 1px solid #000;
  }

  #demo .el-input {
    font-size:19px;
  }

  #demo .my10 {
    padding-right:20%;
    height:30px;
    width:135%;
    font-size: 50px;
  }

  #demo .my0 {
    padding-right:20%;
    height:30px;
    width:135%;
    font-size: 50px;
  }

</style>
