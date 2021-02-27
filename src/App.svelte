<script>

	import Shop from './components/Shop.svelte';

	const example = {
		storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
		domain: 'graphql.myshopify.com'
	};

</script>

<Shop credentials={example} />
