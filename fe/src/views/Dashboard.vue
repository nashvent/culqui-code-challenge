<template>
  <div class="dashboard">
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <a href="#" class="flex justify-center items-center mb-6 text-xl">
          <img src="../assets/logo-black.png" alt="logo" width="100" />
        </a>
      </div>
      <div class="flex items-center w-auto">
        <div>
          <a
            href="#"
            v-on:click="logout()"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >Logout</a
          >
        </div>
      </div>
    </nav>
    <br />
    <br />
    <div class="flex justify-center">
      <div
        class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow m-4"
      >
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Operaciones
        </h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Estas son las operaciones que puedes realizar con tu cuenta (Ignorar iconos).
        </p>
        <ul class="my-4 space-y-3">
          <li>
            <a
              href="#"
              v-on:click="setVisibilityTokenizationModal(true)"
              class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <svg
                aria-hidden="true"
                class="h-5"
                viewBox="0 0 292 292"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z"
                  fill="#3259A5"
                />
                <path
                  d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z"
                  fill="white"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap"
                >Tokenizar datos de tarjeta</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              v-on:click="setVisibilityValidationModal(true)"
              class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <svg
                aria-hidden="true"
                svg
                class="h-5"
                viewBox="0 0 75.591 75.591"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <linearGradient
                  id="a"
                  gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)"
                  gradientUnits="userSpaceOnUse"
                  x2="1"
                >
                  <stop offset="0" stop-color="#ff1b2d" />
                  <stop offset=".3" stop-color="#ff1b2d" />
                  <stop offset=".614" stop-color="#ff1b2d" />
                  <stop offset="1" stop-color="#a70014" />
                </linearGradient>
                <linearGradient
                  id="b"
                  gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)"
                  gradientUnits="userSpaceOnUse"
                  x2="1"
                >
                  <stop offset="0" stop-color="#9c0000" />
                  <stop offset=".7" stop-color="#ff4b4b" />
                  <stop offset="1" stop-color="#ff4b4b" />
                </linearGradient>
                <g transform="matrix(1.3333 0 0 -1.3333 0 107.2)">
                  <path
                    d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z"
                    fill="url(#a)"
                  />
                  <path
                    d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297"
                    fill="url(#b)"
                  />
                </g>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap"
                >Consultar datos de tarjeta</span
              >
            </a>
          </li>
        </ul>
        <div>
          <a
            href="#"
            class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
          >
            <svg
              class="w-3 h-3 mr-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="question-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
              ></path>
            </svg>
            Espero podamos trabajar juntos</a
          >
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="isModalTokenzationOpened"
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-modal flex justify-center items-center"
  >
    <div class="relative w-full max-w-md max-h-full content-center">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          v-on:click="setVisibilityTokenizationModal(false)"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Tokeniza tu tarjeta
          </h3>
          <form class="space-y-6" @submit.prevent="generateToken">
            <div>
              <label
                for="card_number"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Numero de tarjeta</label
              >
              <input
                v-model="tokenizationData.cardNumber"
                type="text"
                name="card_number"
                id="card_number"
                maxlength="16"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="123456789"
                required
              />
            </div>
            <div>
              <label
                for="cvv"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >CVV</label
              >
              <input
                v-model="tokenizationData.cvv"
                type="text"
                name="cvv"
                id="cvv"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="123"
                required
              />
            </div>
            <div>
              <label
                for="expired_date"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Fecha de expiración</label
              >
              <input
                v-model="tokenizationData.expiredDate"
                type="month"
                name="expired_date"
                id="expired_date"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email</label
              >
              <input
                v-model="tokenizationData.email"
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div v-if="!!tokenGenerated">
              <label
                for="token_generated"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><b>Token generado</b></label
              >
              <input
                v-model="tokenGenerated"
                type="text"
                name="token_generated"
                id="token_generated"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"

                readonly
              />
            </div>
            <button
              v-if="!tokenGenerated"
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Crear token
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="isModalValidationOpened"
    id="validation-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-modal flex justify-center items-center"
  >
    <div class="relative w-full max-w-md max-h-full content-center">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          v-on:click="setVisibilityValidationModal(false)"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Valida tu token
          </h3>
          <form class="space-y-6" @submit.prevent="validateToken">
            <div>
              <label
                for="token_value"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Ingresa el token</label
              >
              <input
                v-model="tokenToValidate"
                type="text"
                name="token_value"
                id="token_value"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="XxxXxxXXxXXxxXxxxxX"
                required
              />
            </div>
            <div v-if="tokenValidatedResponse">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Datos de tarjeta:</h2>
                <ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                    <li>
                        <b>Numero de tarjeta:</b> {{ tokenValidatedResponse.cardNumber }} 
                    </li>
                    <li>
                        <b>CVV:</b> *** 
                    </li>
                    <li>
                        <b>Fecha de expiración:</b> {{ tokenValidatedResponse.expirationMonth }} - {{ tokenValidatedResponse.expirationYear }}
                    </li>
                    <li>
                        <b>Email:</b> {{ tokenValidatedResponse.email }}
                    </li>
                </ul>
            
            </div>
            <button
              v-if="!tokenValidatedResponse"
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Validar token
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios, {AxiosError} from "axios";
import { useToast } from "vue-toastification";

@Options({
  components: {},
})
export default class Dashboard extends Vue {
  isModalTokenzationOpened = false;
  loadingTokenization = false;
  tokenGenerated = "";

  tokenizationData = {
    cardNumber: "",
    cvv: "",
    expiredDate: "",
    email: "",
    expirationYear: "",
    expirationMonth: "",
  };

  tokenToValidate = ""
  isModalValidationOpened = false;
  tokenValidatedResponse = null;

  logout() {
    localStorage.removeItem("pk_market");
    this.$router.push("/login");
  }

  setVisibilityTokenizationModal(value: boolean) {
    this.isModalTokenzationOpened = value;
    if(value) {
      this.tokenGenerated = "";
      this.tokenizationData = {
        cardNumber: "",
        cvv: "",
        expiredDate: "",
        email: "",
        expirationYear: "",
        expirationMonth: "",
      };
    }
  }

  setVisibilityValidationModal(value: boolean) {
    this.isModalValidationOpened = value;
    if(value){
      this.tokenToValidate = "";
      this.tokenValidatedResponse = null;
    }
  }

  async generateToken() {
    const toast = useToast();
    const { expiredDate } = this.tokenizationData;
    this.tokenizationData.expirationYear = expiredDate.slice(0, 4);
    this.tokenizationData.expirationMonth = expiredDate.slice(-2);
    try{
      const response = await axios.post(`${process.env.VUE_APP_API_URL}/token`,
        this.tokenizationData,
        {
          headers: {
            Authorization: `${process.env.VUE_APP_DEFAULT_MARKET_AUTHORIZATION}`,
          },
        }
      );
      console.log('response', response);
      const { data } = response;
      this.tokenGenerated = data.token;
      toast.success('Generated token successfully')
    } catch(e){
      let message = "Error";
      if (axios.isAxiosError(e)) {
        message = e.response?.data?.message;
      }

      toast.error(message);
    }
  }

  async validateToken(){
    const toast = useToast();
    try{
      const response = await axios.get(`${process.env.VUE_APP_API_URL}/token`,
        {
          headers: {
            Authorization: `${this.tokenToValidate}`,
          },
        }
      );
      const { data } = response;
      this.tokenValidatedResponse = data;
      toast.success('El token es valido!');
    } catch (e) {
      let message = "Error";
      if (axios.isAxiosError(e)) {
        message = e.response?.data?.message;
      }

      toast.error(message);
    }
  }
}
</script>
