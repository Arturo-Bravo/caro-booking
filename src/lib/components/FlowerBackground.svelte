<div class="background">
	<div class="stem">
		<img src="/lilac_flower.png" alt="Lilac flower" class="flower" />
	</div>
</div>

<style>
	@keyframes sway {
		0%,
		100% {
			transform: translateY(50%) rotate(-90deg) rotate(-5deg);
			transform-origin: 0 50%;
		}
		50% {
			transform: translateY(50%) rotate(-90deg) rotate(5deg);
			transform-origin: 0 50%;
		}
	}

	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000000;
		z-index: -1;
		overflow: hidden;
	}

	.stem {
		position: absolute;
		left: 10vw;
		top: 50%;
		width: 500px;
		height: 100px;
		border: solid 5px #fff;
		border-color: #fff transparent transparent transparent;
		border-radius: 50%/100px 100px 0 0;
		animation: sway 13s ease-in-out infinite;
	}

	.flower {
		position: absolute;
		right: -80px;
		top: -30px;
		width: 200px;
		height: 200px;
		object-fit: contain;
		filter: invert(100%);
	}
</style>
