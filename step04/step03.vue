<template>
  <div>
    <h1>아람북클럽 회원가입</h1>
    <joinHeader :active="3" />
    <div class="info">
      <h2>
        개인정보입력 <span>( * 표시된 항목은 필수입력 항목입니다. )</span>
      </h2>
      <table>
        <tbody>
          <tr>
            <th>아이디<span class="required" /></th>
            <td class="id">
              <input
                type="text"
                v-model="user.loginId"
                placeholder="아이디"
                minlength="6"
                maxlength="12"
                @input="idValidate"
              />
              <p class="txt-validate">{{ idVal.text }}</p>
            </td>
          </tr>
          <tr>
            <th>비밀번호<span class="required" /></th>
            <td>
              <input
                v-model="pwdVal1.pwd"
                type="password"
                minlength="8"
                maxlength="15"
                @input="pwdValidate1"
              />
              <p class="txt-validate">{{ pwdVal1.text }}</p>
            </td>
          </tr>
          <tr>
            <th>비밀번호 확인<span class="required" /></th>
            <td>
              <input
                ref="pwdVal2"
                v-model="pwdVal2.pwd"
                type="password"
                minlength="8"
                maxlength="15"
                :class="{ disabled: !pwdVal1.bool }"
                disabled="disabled"
                @input="pwdValidate2"
              />
              <p class="txt-validate">{{ pwdVal2.text }}</p>
            </td>
          </tr>
          <tr>
            <th>이름<span class="required" /></th>
            <td>
              <input
                v-model="user.memNm"
                type="text"
                maxlength="10"
                placeholder="이름"
                @input="nameValidate"
              />
              <p class="txt-validate">{{ nameVal.text }}</p>
            </td>
          </tr>
          <tr>
            <th>휴대전화번호<span class="required" /></th>
            <td class="phone">
              <input
                v-model="user.mblTelRcgnNo"
                type="text"
                minlength="3"
                maxlength="3"
                @input="numberOnly('p1')"
              />
              <span>-</span>
              <input
                v-model="user.mblTelNatnNo"
                type="text"
                minlength="3"
                maxlength="4"
                @input="numberOnly('p2')"
              />
              <span>-</span>
              <input
                v-model="user.mblTelSeqno"
                type="text"
                minlength="4"
                maxlength="4"
                @input="numberOnly('p3')"
              />
            </td>
          </tr>
          <tr>
            <th />
            <td>
              <button
                @click="phoneCheck"
                ref="btnPhoneCheck"
                disabled="disabled"
              >
                전화번호 중복체크
              </button>
              <p class="txt-validate">{{ phoneVal.text }}</p>
            </td>
          </tr>
          <!-- <tr>
            <th>생년월일(6자리)</th>
            <td class="birthday">
              <input
                v-model="birth.yy"
                type="text"
                minlength="4"
                maxlength="4"
                placeholder="YYYY"
                @input="numberOnly('b1')"
              />
              <span>.</span>
              <input
                v-model="birth.mm"
                type="text"
                minlength="2"
                maxlength="2"
                placeholder="MM"
                @input="numberOnly('b2')"
              />
              <span>.</span>
              <input
                v-model="birth.dd"
                type="text"
                minlength="2"
                maxlength="2"
                placeholder="DD"
                @input="numberOnly('b3')"
              />
            </td>
          </tr> -->
          <!-- <tr>
            <th>성별</th>
            <td class="gender table">
              <ul>
                <li>
                  <label for="genderM"
                    ><input
                      type="radio"
                      id="genderM"
                      name="gender"
                      value="m"
                    />남</label
                  >
                </li>
                <li>
                  <label for="genderF"
                    ><input
                      type="radio"
                      id="genderF"
                      name="gender"
                      value="f"
                    />여</label
                  >
                </li>
              </ul>
            </td>
          </tr> -->
          <tr>
            <th>이메일</th>
            <td v-if="emailVal.bool">
              <input
                type="text"
                v-model="user.memEmlNm"
                ref="emailInput"
                readonly="readonly"
                disabled="disabled"
              />
            </td>
            <td v-else>
              <input
                type="text"
                v-model="user.memEmlNm"
                ref="emailInput"
                @input="emailValidate"
              />
              <p class="txt-validate">{{ emailVal.text }}</p>
              <button
                @click="emailCheck"
                ref="btnEmailCheck"
                disabled="disabled"
              >
                이메일 중복체크
              </button>
            </td>
          </tr>
          <tr>
            <th>주소</th>
            <td class="addr">
              <input
                v-model="user.memBaseAddrNm"
                type="text"
                readonly="readonly"
                disabled="disabled"
              /><button @click="popupOpen">주소찾기</button>
            </td>
          </tr>
          <tr>
            <th />
            <td>
              <input
                type="text"
                ref="detailAddr"
                v-model="user.memDtlAddrNm"
                placeholder="상세주소를 입력해주세요."
                disabled="disabled"
              />
            </td>
          </tr>
          <tr>
            <th>추천 매장<br />(추천인)</th>
            <td>
              <input
                type="text"
                v-model="user.rcmdNm"
                placeholder="최대 20자"
                maxlength="20"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="btn-wrap">
        <button class="btn btn-cancel">취소</button>
        <button class="btn btn-complate" @click="memberJoin">다음</button>
      </div>
      <popup v-if="addrPopup" @closeCall="popupClose" />
      <!-- {{ user.loginId }} <br />
      {{ user.pwd }} <br />
      {{ user.memNm }} <br />
      {{ user.memEmlNm }} <br />
      {{ user.termsI }} <br />
      {{ user.memBthYmd }} <br />
      {{ user.mblTelRcgnNo }} <br />
      {{ user.mblTelNatnNo }} <br />
      {{ user.mblTelSeqno }} <br />
      {{ user.genTelAreaNo }} <br />
      {{ user.genTelNatnNo }} <br />
      {{ user.genTelSeqno }} <br />
      {{ user.memZipNo }} <br />
      {{ user.memBaseAddrNm }} <br />
      {{ user.memDtlAddrNm }} <br />
      {{ user.rcmdNm }} -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import joinHeader from '~/components/layouts/joinHeader'
import popup from '~/components/popup/addrFind'
export default {
  components: { joinHeader, popup },
  // async asyncData({ store }) {
  //   await store.dispatch('user/phoneAgencyGet')
  // },
  data() {
    return {
      addrPopup: false,
      idVal: {
        text: ': 6~12자의 영문 소문자, 숫자'
      },
      pwdVal1: {
        bool: false,
        pwd: '',
        text: ': 8~15자의 영문 대/소문자, 숫자, 특수문자 조합'
      },
      pwdVal2: {
        bool: false,
        pwd: '',
        text: ''
      },
      nameVal: {
        text: ''
      },
      emailVal: {
        bool: false,
        text: ': 계정 정보 찾기를 위해 입력해 주세요.'
      },
      phoneVal: {
        bool: false,
        text: ': 전화번호 입력 후 중복체크를 해주세요.'
      },
      // birth: {
      //   yy: '',
      //   mm: '',
      //   dd: ''
      // },
      user: {
        loginId: '', // 로그인ID(String)
        pwd: '', // 비밀번호(String)
        memNm: '', // 회원명(String)
        memEmlNm: '', // 이메일명(String)
        memBthYmd: '', // 생년월일(String)
        termsI: [],
        // sexCd: '', // 성별 남:M 여:F(String)
        mblTelRcgnNo: '', // 휴대전화식별번호 010 (String)
        mblTelNatnNo: '', // 휴대전화국번호(String)
        mblTelSeqno: '', // 휴대전화일련번호(String)
        genTelAreaNo: '', // 일반전화지역번호(String) —optional
        genTelNatnNo: '', // 일반전화국번호(String) —optional
        genTelSeqno: '', // 일반전화일련번호(String) —optional
        memZipNo: '', // 회원우편번호 (String) —optional
        memBaseAddrNm: '', // 회원기본주소명(String) —optional
        memDtlAddrNm: '', // 회원상세주소명(String) —optional
        rcmdNm: '' // 추천명(String) —optional
      }
    }
  },
  computed: {
    ...mapState({
      // phoneAgencyList: (state) => state.user.phoneAgency
    })
  },
  mounted() {
    if (this.$route.params.email && this.$route.params.trmsI) {
      this.user.memEmlNm = this.$route.params.email
      this.$refs.emailInput.setAttribute('disabled', 'disabled')
      this.emailVal.bool = true
      this.emailVal.text = ''
      this.user.termsI = this.$route.params.trmsI
    }
  },
  methods: {
    // 통신
    async idValidate() {
      const v = /^[a-z0-9_]{0,12}$/
      if (v.test(this.user.loginId)) {
        if (this.user.loginId.length <= 5) {
          if (this.user.loginId.length === 0) {
            this.idVal.text = ': 6~12자의 영문 소문자, 숫자'
          } else {
            this.idVal.text = ': 아이디는 최소 6자 이상입니다.'
          }
        } else {
          if (
            this.user.loginId === '' ||
            this.user.loginId === undefined ||
            this.user.loginId === null
          ) {
            this.user.loginId = ''
            this.idVal.text = ': 6~12자의 영문 소문자, 숫자'
            return false
          }
          try {
            const { data } = await this.$axios.get('/member/join/checkIdUse', {
              params: {
                loginId: this.user.loginId
              }
            })
            if (data.result.memResult === '0') {
              this.idVal.text = ': 사용 가능한 아이디 입니다.'
            } else {
              this.idVal.text = ': 사용중인 아이디 입니다.'
            }
          } catch (error) {
            console.error(error)
          }
        }
      } else {
        this.user.loginId = ''
        this.idVal.text = ': 6~12자의 영문 소문자, 숫자'
      }
    },
    async phoneCheck() {
      const pNum =
        this.user.mblTelRcgnNo + this.user.mblTelNatnNo + this.user.mblTelSeqno
      try {
        const { data } = await this.$axios.get('/member/join/checkPhoneUse', {
          params: {
            memTelNum: pNum
          }
        })
        if (data.result.memResult === '0') {
          const sel = document.querySelectorAll('.phone input')
          for (let i = 0; i < sel.length; i++) {
            sel[i].setAttribute('disabled', 'disabled')
          }
          this.phoneVal.bool = true
          this.$refs.btnPhoneCheck.setAttribute('disabled', 'disabled')
          this.phoneVal.text = ': 가입 가능한 전화번호 입니다.'
        } else {
          this.phoneVal.bool = false
          this.phoneVal.text =
            ': 가입된 전화번호 입니다. 다른 번호를 사용해주세요.'
        }
      } catch (error) {
        this.phoneVal.bool = false
        console.error(error)
      }
    },
    async memberJoin() {
      // eslint-disable-next-line no-useless-escape
      const v = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{0,3}$/i
      if (this.user.memEmlNm !== '') {
        if (!v.test(this.user.memEmlNm)) {
          alert('이메일 주소를 양식에 맞게 또는 삭제 부탁드립니다.')
          this.user.memEmlNm = ''
          return false
        }
      }
      if (
        this.phoneVal.bool &&
        this.user.loginId !== '' &&
        this.user.loginId !== undefined &&
        this.user.loginId !== null &&
        this.user.pwd !== '' &&
        this.user.pwd !== undefined &&
        this.user.pwd !== null &&
        this.user.memNm !== '' &&
        this.user.memNm !== undefined &&
        this.user.memNm !== null
      ) {
        try {
          const { data } = await this.$axios.post('/member/join', {
            loginId: this.user.loginId,
            pwd: this.user.pwd,
            memNm: this.user.memNm,
            mblTelRcgnNo: this.user.mblTelRcgnNo,
            mblTelNatnNo: this.user.mblTelNatnNo,
            mblTelSeqno: this.user.mblTelSeqno,
            termsI: this.user.termsI,
            // optional
            memEmlNm: this.user.memEmlNm,
            memBthYmd: this.user.memBthYmd,
            genTelAreaNo: this.user.genTelAreaNo,
            genTelNatnNo: this.user.genTelNatnNo,
            genTelSeqno: this.user.genTelSeqno,
            memZipNo: this.user.memZipNo,
            memBaseAddrNm: this.user.memBaseAddrNm,
            memDtlAddrNm: this.user.memDtlAddrNm,
            rcmdNm: this.user.rcmdNm
          })
          if (data.ok) {
            this.$router.push({
              name: 'join-step04',
              params: {
                loginId: this.user.loginId
              }
            })
          }
        } catch (error) {
          console.error(error)
        }
      } else {
        alert('필수입력을 확인해주세요.')
      }
    },
    async emailCheck() {
      try {
        // 이메일 중복체크
        const { data } = await this.$axios.get('/member/join/checkEmailUse', {
          params: {
            memEmlNm: this.user.memEmlNm
          }
        })
        this.$refs.btnEmailCheck.setAttribute('disabled', 'disabled')
        if (data.result.memResult === '0') {
          // 중복 아닌 경우
          this.$refs.emailInput.setAttribute('disabled', 'disabled')
          this.$refs.emailInput.setAttribute('readonly', 'readonly')
          this.emailVal.text = '사용 가능한 이메일입니다.'
        } else {
          this.user.memEmlNm = ''
          this.emailVal.text = '이미 사용중인 이메일입니다.'
        }
      } catch (error) {
        console.error(error)
      }
    },
    // 기능
    popupOpen() {
      this.addrPopup = true
    },
    popupClose(data) {
      // console.log('주소', data)
      this.addrPopup = false
      this.user.memBaseAddrNm = data.address
      this.user.memZipNo = data.zonecode
      this.$refs.detailAddr.removeAttribute('disabled')
    },
    pwdValidate1() {
      if (this.pwdVal1.pwd.length > 8) {
        this.pwdVal1.text = ': 사용 가능한 비밀번호 입니다.'
        this.pwdVal1.bool = true
        this.$refs.pwdVal2.removeAttribute('disabled')
      } else {
        this.pwdVal1.text = ': 8~15자의 영문 대/소문자, 숫자, 특수문자 조합'
        this.pwdVal2.text = ''
        this.pwdVal1.bool = false
        this.pwdVal2.bool = false
        this.$refs.pwdVal2.setAttribute('disabled', 'disabled')
      }
      this.pwdVal2.pwd = ''
      this.pwdVal2.text = ''
    },
    pwdValidate2() {
      if (this.pwdVal2.pwd === this.pwdVal1.pwd) {
        this.pwdVal2.text = ': 비밀번호가 일치합니다.'
        this.pwdVal2.bool = true
        this.user.pwd = this.pwdVal1.pwd
      } else {
        this.pwdVal2.text = ': 비밀번호가 일치하지 않습니다.'
        this.pwdVal2.bool = false
        this.user.pwd = ''
      }
    },
    nameValidate() {
      // eslint-disable-next-line no-useless-escape
      const v = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|\*]+$/
      if (this.user.memNm.length > 0) {
        if (v.test(this.user.memNm)) {
          this.nameVal.text = ''
        } else {
          this.nameVal.text = ': 한글과 영문만 가능'
          this.user.memNm = ''
        }
      } else {
        this.nameVal.text = ''
      }
    },
    emailValidate() {
      // eslint-disable-next-line no-useless-escape
      const v = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{0,3}$/i
      if (v.test(this.user.memEmlNm)) {
        this.$refs.btnEmailCheck.removeAttribute('disabled')
        this.emailVal.text = ''
      } else if (
        this.user.memEmlNm === '' ||
        this.user.memEmlNm === null ||
        this.user.memEmlNm === undefined
      ) {
        this.emailVal.text = 'e-mail 을 입력해주세요.'
        this.$refs.btnEmailCheck.setAttribute('disabled', 'disabled')
      } else {
        this.emailVal.text = 'e-mail 형식이 올바르지 않습니다.'
        this.$refs.btnEmailCheck.setAttribute('disabled', 'disabled')
      }
    },
    numberOnly(n) {
      const v = /^[0-9]+$/
      switch (n) {
        case 'p1':
          if (!v.test(this.user.mblTelRcgnNo)) {
            this.user.mblTelRcgnNo = ''
          } else {
            this.phoneValidate()
          }
          break
        case 'p2':
          if (!v.test(this.user.mblTelNatnNo)) {
            this.user.mblTelNatnNo = ''
          } else {
            this.phoneValidate()
          }
          break
        case 'p3':
          if (!v.test(this.user.mblTelSeqno)) {
            this.user.mblTelSeqno = ''
          } else {
            this.phoneValidate()
          }
          break
        case 'b1':
          if (!v.test(this.birth.yy)) {
            this.birth.yy = ''
          }
          break
        case 'b2':
          if (!v.test(this.birth.mm)) {
            this.birth.mm = ''
          }
          break
        case 'b3':
          if (!v.test(this.birth.dd)) {
            this.birth.dd = ''
          }
          break
      }
    },
    phoneValidate() {
      if (
        this.user.mblTelRcgnNo.length === 3 &&
        this.user.mblTelSeqno.length === 4 &&
        this.user.mblTelNatnNo.length >= 3
      ) {
        // 전번 10개 이상일 경우
        const pNum =
          this.user.mblTelRcgnNo +
          this.user.mblTelNatnNo +
          this.user.mblTelSeqno
        this.$refs.btnPhoneCheck.removeAttribute('disabled')
        this.phoneVal.text = ': 중복체크 버튼을 눌러주세요.'
      } else {
        // 전번 10개 미만일 경우
        this.$refs.btnPhoneCheck.setAttribute('disabled', 'disabled')
        this.phoneVal.text = ': 전화번호 입력을 확인해주세요.'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$height: 35px;
h1 {
  text-align: center;
}
h2 {
  font-size: 20px;
  span {
    font-size: 16px;
  }
}
.info {
  margin-top: 20px;
  table {
    width: 100%;
    tr {
      th {
        width: 24%;
        padding-top: 18px;
        font-size: 18px;
        text-align: left;
        vertical-align: top;
        .required::after {
          content: '*';
          display: inline-block;
          margin-left: 2px;
          color: #ff3131;
        }
      }
      td {
        overflow: hidden;
        width: 76%;
        padding-top: 10px;
        & > * {
          float: left;
        }
        input[type='text'],
        input[type='password'],
        button {
          width: 100%;
        }
        button {
          height: $height;
        }
        .txt-validate {
          margin-top: 10px;
          font-size: 18px;
        }
        &.addr {
          input[type='text'] {
            width: 79%;
          }
          button {
            width: 20%;
            height: 38px;
            margin-left: 1%;
          }
        }
        &.table {
          ul {
            display: table;
            width: 100%;
            li {
              display: table-cell;
              label {
                display: block;
                text-align: center;
              }
            }
          }
        }
        &.phone {
          input[type='text'] {
            width: 30%;
            text-align: center;
          }
          span {
            display: block;
            width: 5%;
            height: $height;
            line-height: $height;
            text-align: center;
          }
        }
        &.birthday {
          input[type='text'] {
            width: 30%;
            text-align: center;
          }
          span {
            display: block;
            width: 5%;
            height: $height;
            line-height: $height;
            text-align: center;
          }
        }
        &.gender {
          li {
            width: 50%;
            input[type='radio'] {
              margin-right: 8px;
            }
          }
        }
      }
    }
  }
  .btn-wrap {
    display: table;
    width: 100%;
    & > * {
      display: table-cell;
      width: 50%;
    }
  }
}
</style>
